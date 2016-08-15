import fs from 'fs'
import path from 'path'
import meow from 'meow'
import pify from 'pify'
import fullname from 'user-fullname'
import email from 'user-email'
import projectName from 'project-name'
import lissie from './lissie'

const cli = meow(`
  Usage
    $ lissie <license>  Show text of given license
    $ lissie ls         List of available licenses

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

const ls = () => {
  return pify(fs.readdir)(path.resolve(__dirname, '..', 'licenses'))
    .then(licenses => licenses.join('\n'))
}

if (cli.input[0] === 'ls') {
  ls().then(list => {
    console.log(list)
    process.exit()
  }).catch(error => {
    console.log(error)
    process.exit(1)
  })
}

Promise.all([
  fullname(),
  email()
]).then(results => {
  const [author, email] = results
  const project = projectName()
  const year = new Date().getFullYear()
  return lissie({
    license: cli.input[0],
    author: cli.flags.author || author,
    year: cli.flags.year || year,
    email: cli.flags.email || email,
    project: cli.flags.project || project
  })
}).then(license => {
  console.log(license)
  process.exit()
})
