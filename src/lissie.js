import { readFile, readdir } from 'fs'
import path from 'path'
import pify from 'pify'
import assign from 'deep-assign'
import fullname from 'fullname'
import pProps from 'p-props'

const normalize = text => text.trim().toLowerCase().replace(' ', '-')

export const list = () => pify(readdir)('licenses')

export default (license = 'mit', options = {}) => {
  return pProps({
    year: Promise.resolve(new Date().getFullYear()),
    author: fullname()
  })
  .then(defaults => assign({}, defaults, options))
  .then(opts => {
    return pify(readFile)(
      path.join(__dirname, '..', 'licenses', normalize(license)),
      { encoding: 'utf8' }
    ).then(text => ({
      opts,
      text
    }))
  })
  .then(({ opts, text }) => text.replace(
    /\{year\}|\{author\}|\{project\}|\{email\}/gi,
    matched => opts[matched.replace(/\{|\}/gi, '')] || matched
  ))
  .catch(({ code }) => {
    if (code === 'ENOENT') {
      throw new Error('There is not that license')
    }
  })
}
