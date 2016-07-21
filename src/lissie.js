import fs from 'fs'
import path from 'path'

const getAuthor = () => process.env.USER
const getYear = () => new Date().getFullYear()
const getLicenseText = license => {
  return fs.readFileSync(path.resolve('..', `licenses/${license}`), 'utf8')
}
const template = (text, vars) => {
  return Object.keys(vars).filter(k => vars[k]).reduce((res, key) => {
    const re = new RegExp(`{${key}}`)
    return res.replace(re, vars[key])
  }, text)
}

const lissie = opts => {
  const defaultOptions = {
    license: 'mit',
    author: getAuthor(),
    year: getYear()
  }
  const options = Object.assign({}, defaultOptions, opts)
  const text = template(getLicenseText(options.license), {
    author: options.author,
    year: options.year,
    email: options.email,
    project: options.project
  })
  return text
}

export default lissie
