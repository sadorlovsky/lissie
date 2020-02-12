import { readFile } from 'fs'
import { promisify } from 'util'
import path from 'path'
import fullname from 'fullname'
// import email from 'user-email'
import project from 'project-name'
import pProps from 'p-props'
import { isNil, merge } from 'lodash'

const normalize = (text: string): string => {
  return text.trim().toLowerCase().replace(' ', '-')
}

export default async (license: string = 'mit', options: any = {}): Promise<string> => {
  try {
    const magic = isNil(options.magic) ? false : options.magic
    const props = magic ? {
      year: Promise.resolve(new Date().getFullYear()),
      author: fullname(),
      // email: email(),
      project: project()
    } : {
      year: Promise.resolve(new Date().getFullYear())
    }

    const opts = await pProps(props).then(defaults => merge({}, defaults, options))

    const text = await promisify(readFile)(
      path.join(__dirname, '..', 'licenses', normalize(license)),
      { encoding: 'utf8' }
    )

    return text.replace(
      /\{year\}|\{author\}|\{project\}|\{email\}/gi,
      matched => opts[matched.replace(/\{|\}/gi, '')] || matched
    )
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('There is no such a license')
    }
    throw err
  }
}
