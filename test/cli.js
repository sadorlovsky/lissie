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

test('ls', async t => {
  const res = await execa('../bin/lissie.js', ['ls'])
  const available = ['apache-2.0', 'gpl-3.0', 'isc', 'mit', 'mpl-2.0', 'wtfpl']
  t.is(res.stdout, available.join('\n'))
})
