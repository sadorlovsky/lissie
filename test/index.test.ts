import test from 'ava'
import { stripIndent } from 'common-tags'
import lissie from '../source'

const take = (array: any[], count: number): any[] => array.slice(0, count)
const head = (str: string): string => take(str.split('\n'), 3).join('\n')

test('returns license text', t => {
  const expected = stripIndent`
  The MIT License (MIT)

  Copyright (c) {{year}} {{author}}
  `
  t.is(head(lissie()), expected)
  t.is(head(lissie('mit')), expected)
})

test('puts a year', t => {
  const expected = stripIndent`
  The MIT License (MIT)

  Copyright (c) 2020 {{author}}
  `
  t.is(head(lissie('mit', { year: 2020 })), expected)
})

test('puts a year and an author', t => {
  const expected = stripIndent`
  The MIT License (MIT)

  Copyright (c) 2020 Zach Orlovsky
  `
  t.is(head(lissie('mit', { year: 2020, author: 'Zach Orlovsky' })), expected)
})
