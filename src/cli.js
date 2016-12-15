#!/usr/bin/env node

import meow from 'meow'
import chalk from 'chalk'
import license from './lissie'

const cli = meow(`
  Usage
    $ license <license>

  Options
    --author,  -a
    --year,    -y
    --email,   -e
    --project, -p

  Examples
    $ license
    $ license mit
    $ license mit -a "Zach Orlovsky"
`, {
  alias: {
    a: 'author',
    y: 'year',
    e: 'email',
    p: 'project'
  }
})

const highlight = text => text.replace(
  /\{year\}|\{author\}|\{project\}|\{email\}/gi,
  matched => chalk.black.bgYellow(matched)
)

license(cli.input[0] || 'mit', {
  author: cli.flags.author,
  year: cli.flags.year,
  email: cli.flags.email,
  project: cli.flags.project
})
  .then(highlight)
  .then(text => console.log(text))
  .catch(({ message }) => console.log(message))
