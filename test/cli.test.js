import test from 'ava'
import execa from 'execa'
import strip from './helpers/strip'

test('ls', async t => {
  const res = await execa('../bin/lissie.js', ['ls'])
  const expected = strip`
  apache-2.0
  gpl-3.0
  isc
  mit
  mpl-2.0
  wtfpl
  `
  t.is(res.stdout, expected)
})
