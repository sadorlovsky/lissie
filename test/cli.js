import test from 'ava'
import execa from 'execa'
import lissie from '../src/lissie'

test(async t => {
  const res = await execa('../bin/lissie.js')
  t.is(res.stdout, lissie({}))
})

test(async t => {
  const res = await execa('../bin/lissie.js', ['isc'])
  t.is(res.stdout, lissie({ license: 'isc' }))
})
