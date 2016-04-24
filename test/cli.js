import test from 'ava'
import execa from 'execa'
import lissie from '../src/lissie'

test('cli is ok', async t => {
  const res = await execa('../bin/lissie.js')
  t.is(res.stdout, lissie({}))
})

test('cli with argument is ok', async t => {
  const res = await execa('../bin/lissie.js', ['isc'])
  t.is(res.stdout, lissie({ license: 'isc' }))
})
