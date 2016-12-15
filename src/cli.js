const meow = require('meow')
const chalk = require('chalk')
const lissie = require('./lissie')

const cli = meow(`
  Usage
    $ lissie <license>
`)

const highlight = text => text.replace(
  /\{year\}|\{author\}|\{project\}|\{email\}/gi,
  matched => chalk.black.bgYellow(matched)
)

lissie(cli.input[0] || 'mit')
  .then(highlight)
  .then(text => console.log(text))
  .catch(({ message }) => console.log(message))
