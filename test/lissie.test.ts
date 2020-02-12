import test from 'ava'
import { take } from 'lodash'
import { stripIndent } from 'common-tags'
import license from '../source/lissie'

const head = (str: string): string => take(str.split('\n'), 3).join('\n')

test('returns license text', async t => {
  const expected = stripIndent`
  The MIT License (MIT)

  Copyright (c) ${(new Date()).getFullYear()} {author}
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

test('throws if no license found', async t => {
  const error = await t.throwsAsync(license('no-exist'));
  t.is(error.message, 'There is no such a license');
})
