import assign from 'assign-defined'

const template = (text, vars) => {
  return Object.keys(assign({}, vars))
    .reduce((res, key) => {
      return res.replace(new RegExp(`{${key}}`), vars[key])
    }, text)
}

export default template
