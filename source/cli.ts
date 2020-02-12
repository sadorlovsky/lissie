#!/usr/bin/env node
import { readdir } from 'fs'
import { promisify } from 'util'
import meow from 'meow'
import chalk from 'chalk'
import updateNotifier from 'update-notifier'
import { map } from 'lodash/fp'
import { isNil } from 'lodash'
import pkg from '../package.json'
import license from './lissie'

const cli = meow(`
  Usage
    $ license <license>

  Options
    --author,   -a
    --year,     -y
    --email,    -e
    --project,  -p
    --no-magic
    --version,  -v
    --help,     -h

  Examples
    $ license
    $ license mit
    $ license mit -a "Zach Orlovsky"
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

const list = () => promisify(readdir)('licenses')

const highlight = (text: string): string => text.replace(
  /\{year\}|\{author\}|\{project\}|\{email\}/gi,
  matched => chalk.black.bgYellow(matched)
)

if (cli.input[0] === 'list') {
  list()
    .then(map(l => console.log('⚫', l)))
    .then(() => process.exit())
}

updateNotifier({ pkg }).notify()

license(cli.input[0] || 'mit', {
  author: cli.flags.author,
  year: cli.flags.year,
  email: cli.flags.email,
  project: cli.flags.project,
  magic: isNil(cli.flags.magic) ? true : cli.flags.magic
})
  .then(highlight)
  .then(text => console.log(text))
  .catch(({ message }) => console.log(message))
