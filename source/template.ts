type TemplateData = {
  [key: string]: any
}

export function render (text: string, data: TemplateData = {}) {
  return text.replace(/\{\{.*?\}\}/gi, matched => {
    const key = matched.replace(/\{|\}/gi, '')
    return data[key] || matched
  })
}
