import path from 'path'
import fs from 'fs'
import pify from 'pify'
import assign from 'assign-defined'
import userFullname from 'user-fullname'
import userEmail from 'user-email'
import readPkg from 'read-pkg'
import any from 'promise.any'
import pProps from 'p-props'
import template from './template'

const getLicenseText = license => {
  return pify(fs.readFile)(
    path.resolve(__dirname, '..', 'licenses', `${license}`), 'utf8'
  )
}

const getAuthor = author => {
  return author === 'auto' ? any([
    userFullname(),
    readPkg().then(pkg => pkg.author.name)
  ]) : author
}

const getYear = year => {
  return year === 'auto' ? new Date().getFullYear() : year
}

const getEmail = email => {
  return email === 'auto' ? any([
    userEmail(),
    readPkg().then(pkg => pkg.author.email)
  ]) : email
}

const getProject = project => {
  return project === 'auto' ? readPkg().then(pkg => pkg.name) : project
}

const lissie = props => {
  const defaults = {
    license: 'mit',
    author: 'auto',
    year: 'auto',
    email: 'auto',
    project: 'auto'
  }

  const options = typeof props === 'string'
    ? assign({}, defaults, { license: props })
    : assign({}, defaults, props)

  pProps({
    author: getAuthor(options.author),
    year: getYear(options.year),
    email: getEmail(options.email),
    project: getProject(options.project)
  }).then(result => {
    return assign({}, options, result)
  })
}

export default lissie
