import fs from 'fs'
import path from 'path'

const getAuthor = () => process.env.USER
const getYear = () => new Date().getFullYear()
const getLicenseText = (license) => {
  return fs.readFileSync(path.resolve(__dirname, '..', `licenses/${license}`), 'utf8')
}

const lissie = ({license='mit', author=getAuthor(), year=getYear(), email='', project=''}) => {
  let text = getLicenseText(license)
    .replace(/{author}/, author).replace(/{year}/, year)
  if (email !== '') text = text.replace(/{email}/, email)
  if (project !== '') text = text.replace(/{project}/, project)
  return text
}

export default lissie
