const meow = require('meow')
const chalk = require('chalk')
const lissie = require('./lissie')

const cli = meow(`
  Usage
    $ lissie <license>
`)

lissie(cli.input[0] || 'mit')
  .then(text => text.replace('{year}', chalk.black.bgYellow.bold('{year}')))
  .then(text => text.replace('{author}', chalk.black.bgYellow.bold('{author}')))
  .then(text => console.log(text))
