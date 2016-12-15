#!/usr/bin/env node

const meow = require('meow')
const chalk = require('chalk')
const lissie = require('./lissie')

const cli = meow(`
  Usage
    $ license <license>

  Options
    --author, -a
    --year,   -y

  Examples
    $ license
    $ license mit
    $ license mit -a "Zach Orlovsky"
`, {
  alias: {
    a: 'author',
    y: 'year'
  }
})

const highlight = text => text.replace(
  /\{year\}|\{author\}|\{project\}|\{email\}/gi,
  matched => chalk.black.bgYellow(matched)
)

lissie(cli.input[0] || 'mit', {
  author: cli.flags.author,
  year: cli.flags.year
})
  .then(highlight)
  .then(text => console.log(text))
  .catch(({ message }) => console.log(message))
