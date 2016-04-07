import fs from 'fs'

const getAuthor = () => process.env.USER
const getYear = () => new Date().getFullYear()
const getLicenseText = (license) => fs.readFileSync(`../licenses/${license}`, 'utf8')

const lissie = ({license='mit', author=getAuthor(), year=getYear(), email='', project=''}) => {
  let text = getLicenseText(license)
  text = text.replace(/{author}/, author).replace(/{year}/, year)
  if (email !== '') text = text.replace(/{email}/, email)
  if (project !== '') text = text.replace(/{project}/, project)
  return text
}

export default lissie
