const fs = require('fs')
const path = require('path')
const pify = require('pify')

const normalize = text => text.trim().toLowerCase().replace(' ', '-')

const lissie = (license = 'mit', options = {}) => pify(fs)
  .readFile(
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

module.exports = lissie
