import test from 'ava'
import { render } from '../source/template'

test('renders a template', t => {
  t.is(
    render('This is a string with {{variable}}'),
    'This is a string with {{variable}}'
  )
  t.is(
    render('This is a string with {{two}} {{variables}}'),
    'This is a string with {{two}} {{variables}}'
  )
  t.is(
    render('Replace variable with {{text}}', { text: 'a value' }),
    'Replace variable with a value'
  )
  t.is(
    render('Replace {{this}} but not {{that}}', { this: '🤠' }),
    'Replace 🤠 but not {{that}}'
  )
  t.is(
    render('Replace both {{one}} {{two}}', { one: '🐍', two: '🦝' }),
    'Replace both 🐍 🦝'
  )
})
