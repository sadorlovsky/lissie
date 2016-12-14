import fs from 'fs'
import path from 'path'
import pify from 'pify'
import test from 'ava'
import lissie from './lissie-async'

test(async t => {
  const expected = await pify(fs).readFile(path.join('licenses', 'mit'), { encoding: 'utf8' })
  t.is(await lissie('mit'), expected)
  t.is(await lissie({ license: 'mit' }), expected)
})
