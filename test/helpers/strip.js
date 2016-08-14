import {
  TemplateTag,
  stripIndentTransformer,
  trimResultTransformer,
  replaceResultTransformer
} from 'common-tags'

const stripIndent = new TemplateTag(
  stripIndentTransformer,
  trimResultTransformer('left'),
  replaceResultTransformer(/\n(\n*)\s*?$/, '$1')
)

export default stripIndent
