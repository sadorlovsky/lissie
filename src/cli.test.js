import test from 'ava'
import execa from 'execa'
import license from './lissie'

test('MIT without params', async t => {
  const { stdout } = await execa('src/cli.js')
  t.is(stdout, await license('mit'))
})

test('MIT', async t => {
  const { stdout } = await execa('src/cli.js', ['mit'])
  t.is(stdout, await license('mit'))
})

test('Error message if license not exists', async t => {
  const { stdout } = await execa('src/cli.js', ['no-exist'])
  t.is(stdout, 'There is not that license')
})
