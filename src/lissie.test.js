import fs from 'fs'
import path from 'path'
import pify from 'pify'
import test from 'ava'
import { take } from 'lodash'
import { stripIndent } from 'common-tags'
import lissie from './lissie'

test('returns license text', async t => {
  const expected = await pify(fs).readFile(path.join('licenses', 'mit'), { encoding: 'utf8' })
  t.is(await lissie('mit'), expected)
  t.is(await lissie({ license: 'mit' }), expected)
})

test('pass options', async t => {
  const mit = await lissie({
    license: 'mit',
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

test('throws if no license found', t => {
  t.throws(lissie('no-exist'))
})
