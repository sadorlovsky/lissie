import { readFile, readdir } from 'fs'
import path from 'path'
import pify from 'pify'
import assign from 'deep-assign'

const normalize = text => text.trim().toLowerCase().replace(' ', '-')

export const list = () => pify(readdir)('licenses')

export default (license = 'mit', options = {}) => {
  const defaults = {
    year: new Date().getFullYear()
  }
  const opts = assign({}, defaults, options)
  return pify(readFile)(
    path.join(__dirname, '..', 'licenses', normalize(license)),
    { encoding: 'utf8' }
  )
  .then(text => text.replace(
    /\{year\}|\{author\}|\{project\}|\{email\}/gi,
    matched => opts[matched.replace(/\{|\}/gi, '')] || matched
  ))
  .catch(({ code }) => {
    if (code === 'ENOENT') {
      throw new Error('There is not that license')
    }
  })
}
