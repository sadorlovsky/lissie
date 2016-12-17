import test from 'ava'
import { take } from 'lodash'
import { stripIndent } from 'common-tags'
import license from './lissie'

const head = x => take(x.split('\n'), 3).join('\n')

test('returns license text', async t => {
  const expected = stripIndent`
  The MIT License (MIT)

  Copyright (c) 2016 {author}
`
  t.is(head(await license()), expected)
  t.is(head(await license('mit')), expected)
})

test('pass options', async t => {
  const mit = await license('mit', {
    year: 2015,
    author: 'Zach Orlovsky'
  })
  const expected = stripIndent`
  The MIT License (MIT)

  Copyright (c) 2015 Zach Orlovsky
`
  t.is(head(mit), expected)
})

test('normalize input', async t => {
  t.is(await license('WTFPL'), await license('wtfpl'))
  t.is(await license('Apache 2.0'), await license('apache-2.0'))
})

test('throws if no license found', t => {
  t.throws(license('no-exist'))
})
