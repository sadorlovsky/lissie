import { readFile } from 'fs'
import path from 'path'
import pify from 'pify'

const normalize = text => text.trim().toLowerCase().replace(' ', '-')

export default (license = 'mit', options = {}) => pify(readFile)(
    path.join('licenses', normalize(license)), { encoding: 'utf8' }
  )
  .then(text => text.replace(
    /\{year\}|\{author\}|\{project\}|\{email\}/gi,
    matched => options[matched.replace(/\{|\}/gi, '')] || matched
  ))
  .catch(({ code }) => {
    if (code === 'ENOENT') {
      throw new Error('There is not that license')
    }
  })
