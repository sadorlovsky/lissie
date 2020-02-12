import { readdir } from 'fs'
import { promisify } from 'util'
import test from 'ava'
import execa from 'execa'
import license from '../source/lissie'

test('MIT without params', async t => {
  const { stdout } = await execa('ts-node', ['source/cli.ts', '--no-magic'])
  t.is(stdout, await license('mit'))
})

test('MIT', async t => {
  const { stdout } = await execa('ts-node', ['source/cli.ts', 'mit', '--no-magic'])
  t.is(stdout, await license('mit'))
})

test('list', async t => {
  const { stdout } = await execa('ts-node', ['source/cli.ts', 'list'])
  const licenses = await promisify(readdir)('licenses')
  t.is(stdout, licenses.map(l => `⚫ ${l}`).join('\n'))
})

test('Error message if license not exists', async t => {
  const { stdout } = await execa('ts-node', ['source/cli.ts', 'no-exist', '--no-magic'])
  t.is(stdout, 'There is no such a license')
})
