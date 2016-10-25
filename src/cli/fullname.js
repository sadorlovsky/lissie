import getFullname from 'user-fullname'
import readPkg from 'read-pkg'
import any from 'promise.any'

function fullname () {
  return any([
    getFullname(),
    readPkg().then(pkg => pkg.author.name)
  ])
}

export default fullname
