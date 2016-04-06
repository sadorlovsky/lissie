#!/usr/bin/env node

const meow = require('meow')

const cli = meow(`
  Usage
    $ lisa <license>

  Options
    -a, --author "<your name>"
    -y, --year <year>
    -e, --email "<your email>"
    -p, --project "<project name>"
    -v, --version
    -h, --help

  Examples
    $ lisa mit
    $ lisa mit -a "Zach Orlovsky" -y 2016
    $ lisa mit -a "Zach Orlovsky" -e "sadorlovsky@gmail.com"
`,
  {
    alias: {
      a: 'author',
      y: 'year',
      v: 'version',
      h: 'help'
    }
  }
)
