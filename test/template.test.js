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

test(t => {
  const text = `
    hello, {name}
    hello again, {name}
  `
  const expected = `
    hello, Bob
    hello again, Bob
  `
  t.is(template(text, { name: 'Bob' }), expected)
})
