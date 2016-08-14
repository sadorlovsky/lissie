import path from 'path'
import fs from 'fs'
import pify from 'pify'
import assign from 'assign-defined'

const getLicenseText = license => {
  return pify(fs.readFile)(path.resolve(`licenses/${license}`), 'utf8')
}

const template = (text, vars) => {
  return Object.keys(vars).filter(k => vars[k]).reduce((res, key) => {
    const re = new RegExp(`{${key}}`)
    return res.replace(re, vars[key])
  }, text)
}

const lissie = props => {
  const defaultOptions = {
    license: 'mit',
    year: new Date().getFullYear()
  }
  const options = assign({}, defaultOptions, props)
  return getLicenseText(options.license).then(text => {
    return template(text, options)
  })
}

export default lissie
