import path from 'path'
import fs from 'fs'
import pify from 'pify'
import assign from 'assign-defined'
import template from './template'

const getLicenseText = license => {
  return pify(fs.readFile)(
    path.resolve(__dirname, '..', 'licenses', `${license}`), 'utf8'
  )
}

const lissie = props => {
  const options = typeof props === 'string'
    ? { license: props }
    : assign({}, props)
  return getLicenseText(options.license || 'mit').then(text => {
    return template(text, options)
  })
}

export default lissie
