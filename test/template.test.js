import test from 'ava'
import template from '../src/template'

test(t => {
  const text = `
    hello, {name}
  `
  const expected = `
    hello, Bob
  `
  t.is(template(text, { name: 'Bob' }), expected)
})
