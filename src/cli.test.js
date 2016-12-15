import test from 'ava'
import execa from 'execa'
import lissie from './lissie'

test('MIT without params', async t => {
  const { stdout } = await execa('bin/lissie.js')
  t.is(stdout, await lissie('mit'))
})

test('MIT', async t => {
  const { stdout } = await execa('bin/lissie.js', ['mit'])
  t.is(stdout, await lissie('mit'))
})

test('Error message if license not exists', async t => {
  const { stdout } = await execa('bin/lissie.js', ['no-exist'])
  t.is(stdout, 'There is not that license')
})
