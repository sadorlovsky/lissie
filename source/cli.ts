#!/usr/bin/env node
import meow from 'meow'
import chalk from 'chalk'
import lissie from '.'

type LicenseType = 'mit' | 'apache'

const cli = meow(`
  Usage
    $ lissie <license>

  Options
    --author,   -a
    --year,     -y
    --email,    -e
    --project,  -p
    --no-magic
    --version,  -v
    --help,     -h

  Examples
    $ lissie
    $ lissie mit
    $ lissie mit -a "Zach Orlovsky"
`, {
  flags: {
    author: {
      type: 'string',
      alias: 'a'
    },
    year: {
      type: 'number',
      alias: 'y'
    },
    email: {
      type: 'string',
      alias: 'e'
    },
    project: {
      type: 'string',
      alias: 'p'
    },
    version: {
      type: 'boolean',
      alias: 'v'
    },
    help: {
      type: 'boolean',
      alias: 'h'
    }
  }
})

const highlight = (text: string): string => text.replace(
  /\{\{.*?\}\}/gi,
  matched => chalk.black.bgYellow(matched)
)

const output = lissie(cli.input[0] as LicenseType, cli.flags)
console.log(highlight(output))
