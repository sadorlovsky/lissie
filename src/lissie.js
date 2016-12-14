const fs = require('fs')
const path = require('path')
const pify = require('pify')
const { isString, get } = require('lodash')

const lissie = options => {
  const license = isString(options) ? options : get(options, 'license')
  return pify(fs)
    .readFile(path.join('licenses', license), { encoding: 'utf8' })
}

module.exports = lissie
