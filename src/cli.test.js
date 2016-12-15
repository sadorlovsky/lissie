import test from 'ava'
import execa from 'execa'
import lissie from './lissie'

test(async t => {
  const { stdout } = await execa('bin/lissie.js')
  t.is(stdout, await lissie('mit'))
})
