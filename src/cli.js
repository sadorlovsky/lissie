import fs from 'fs'
import path from 'path'
import meow from 'meow'
import lissie from './lissie'

const cli = meow(`
  Usage
    $ lissie <license>

  Options
    -a, --author "<your name>"
    -y, --year <year>
    -e, --email "<your email>"
    -p, --project "<project name>"
    -v, --version
    -h, --help

  Examples
    $ lissie mit
    $ lissie mit -a "Zach Orlovsky" -y 2016
    $ lissie mit -a "Zach Orlovsky" -e "sadorlovsky@gmail.com"
`,
  {
    alias: {
      a: 'author',
      y: 'year',
      e: 'email',
      p: 'project',
      v: 'version',
      h: 'help'
    }
  }
)

function ls () {
  const licenses = fs.readdirSync(path.resolve(__dirname, '..', 'licenses'))
  return licenses.reduce((prev, curr) => {
    return `${prev}\n${curr}`
  })
}

if (cli.input[0] === 'ls') {
  console.log(ls())
  process.exit()
}

console.log(
  lissie({
    license: cli.input[0],
    author: cli.flags.author,
    year: cli.flags.year,
    email: cli.flags.email,
    project: cli.flags.project
  })
)
