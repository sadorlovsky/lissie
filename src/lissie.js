import path from 'path'
import fs from 'fs'
import Promise from 'bluebird'

const readFile = Promise.promisify(fs.readFile)

const getAuthor = () => Promise.resolve(process.env.USER)
const getYear = () => new Date().getFullYear()
const getLicenseText = license => {
  return readFile(path.resolve('..', `licenses/${license}`), 'utf8')
}
const template = (text, vars) => {
  return Object.keys(vars).filter(k => vars[k]).reduce((res, key) => {
    const re = new RegExp(`{${key}}`)
    return res.replace(re, vars[key])
  }, text)
}

const lissie = props => {
  return Promise.props({
    license: 'mit',
    author: getAuthor(),
    year: getYear()
  })
  .then(defaultOptions => {
    return Object.assign({}, defaultOptions, props)
  })
  .then(options => {
    return [
      getLicenseText(options.license),
      options
    ]
  })
  .spread((text, options) => {
    return template(text, {
      author: options.author,
      year: options.year,
      email: options.email,
      project: options.project
    })
  })
}

export default lissie
