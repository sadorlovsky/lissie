import fs from 'fs'
import path from 'path'
import pify from 'pify'
import test from 'ava'
import { take } from 'lodash'
import { stripIndent } from 'common-tags'
import lissie from './lissie'

test('returns license text', async t => {
  const expected = await pify(fs).readFile(path.join('licenses', 'mit'), { encoding: 'utf8' })
  t.is(await lissie(), expected)
  t.is(await lissie('mit'), expected)
})

test('pass options', async t => {
  const mit = await lissie('mit', {
    year: 2016,
    author: 'Zach Orlovsky'
  })
  const expected = stripIndent`
  The MIT License (MIT)

  Copyright (c) 2016 Zach Orlovsky
`
  const head = take(mit.split('\n'), 3).join('\n')
  t.is(head, expected)
})

test('normalize input', async t => {
  t.is(await lissie('WTFPL'), await lissie('wtfpl'))
  t.is(await lissie('Apache 2.0'), await lissie('apache-2.0'))
})

test('throws if no license found', t => {
  t.throws(lissie('no-exist'))
})
