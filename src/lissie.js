import { readFile, readdir } from 'fs'
import path from 'path'
import pify from 'pify'
import assign from 'deep-assign'
import fullname from 'fullname'
import email from 'user-email'
import project from 'project-name'
import pProps from 'p-props'
import { isNil } from 'lodash'

const normalize = text => text.trim().toLowerCase().replace(' ', '-')

export const list = () => pify(readdir)('licenses')

export default (license = 'mit', options = {}) => {
  const magic = isNil(options.magic) ? 'true' : options.magic
  const props = magic ? {
    year: Promise.resolve(new Date().getFullYear()),
    author: fullname(),
    email: email(),
    project: project()
  } : {
    year: Promise.resolve(new Date().getFullYear())
  }
  return pProps(props)
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
