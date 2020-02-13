import test from 'ava'
import execa from 'execa'
import lissie from '../source'

test('MIT without params', async t => {
  const { stdout } = await execa('ts-node', ['source/cli.ts'])
  t.is(stdout, lissie('mit'))
})

test('MIT', async t => {
  const { stdout } = await execa('ts-node', ['source/cli.ts', 'mit'])
  t.is(stdout, lissie('mit'))
})

test('MIT with a year', async t => {
  const { stdout } = await execa('ts-node', ['source/cli.ts', 'mit', '-y', '2020'])
  t.is(stdout, lissie('mit', { year: 2020 }))
})

test('Apache', async t => {
  const { stdout } = await execa('ts-node', ['source/cli.ts', 'apache'])
  t.is(stdout, lissie('apache'))
})
