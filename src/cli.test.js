import test from 'ava'
import execa from 'execa'
import license, { list } from './lissie'

test('MIT without params', async t => {
  const { stdout } = await execa('src/cli.js', ['--no-magic'])
  t.is(stdout, await license('mit'))
})

test('MIT', async t => {
  const { stdout } = await execa('src/cli.js', ['mit', '--no-magic'])
  t.is(stdout, await license('mit'))
})

test('list', async t => {
  const { stdout } = await execa('src/cli.js', ['list'])
  const licenses = await list()
  t.is(stdout, licenses.map(l => `⚫ ${l}`).join('\n'))
})

test('Error message if license not exists', async t => {
  const { stdout } = await execa('src/cli.js', ['no-exist', '--no-magic'])
  t.is(stdout, 'There is not that license')
})
