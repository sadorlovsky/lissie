import fs from 'fs'
import test from 'ava'
import lissie from '../src/lissie'

test('MIT by default', async t => {
  const mit = fs.readFileSync('../licenses/mit', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(await lissie({}), mit)
})

test('MIT', async t => {
  const mit = fs.readFileSync('../licenses/mit', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(await lissie({ license: 'mit' }), mit)
})

test('MIT with custom author', async t => {
  const mit = fs.readFileSync('../licenses/mit', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(await lissie({ license: 'mit', author: 'Zach Orlovsky' }), mit)
})

test('MIT with custom year', async t => {
  const mit = fs.readFileSync('../licenses/mit', 'utf8')
    .replace(/{year}/, '2011')
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(await lissie({ license: 'mit', year: '2011' }), mit)
})

test('MIT with custom author and custom year', async t => {
  const mit = fs.readFileSync('../licenses/mit', 'utf8')
    .replace(/{year}/, '2011')
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(await lissie({ license: 'mit', author: 'Zach Orlovsky', year: '2011' }), mit)
})

test('WTFPL', async t => {
  const wtfpl = fs.readFileSync('../licenses/wtfpl', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(await lissie({ license: 'wtfpl' }), wtfpl)
})

test('WTFPL with custom author', async t => {
  const wtfpl = fs.readFileSync('../licenses/wtfpl', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(await lissie({ license: 'wtfpl', author: 'Zach Orlovsky' }), wtfpl)
})

test('WTFPL with custom email', async t => {
  const wtfpl = fs.readFileSync('../licenses/wtfpl', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{email}/, 'sadorlovsky@gmail.com')
  t.is(await lissie({ license: 'wtfpl', email: 'sadorlovsky@gmail.com' }), wtfpl)
})

test('WTFPL with custom author and email', async t => {
  const wtfpl = fs.readFileSync('../licenses/wtfpl', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{email}/, 'sadorlovsky@gmail.com')
  t.is(await lissie({ license: 'wtfpl', author: 'Zach Orlovsky', email: 'sadorlovsky@gmail.com' }), wtfpl)
})

test('WTFPL with custom year', async t => {
  const wtfpl = fs.readFileSync('../licenses/wtfpl', 'utf8')
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{year}/, '2010')
  t.is(await lissie({ license: 'wtfpl', year: '2010' }), wtfpl)
})

test('Apache-2.0', async t => {
  const apache = fs.readFileSync('../licenses/apache-2.0', 'utf8')
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{year}/, new Date().getFullYear())
  t.is(await lissie({ license: 'apache-2.0' }), apache)
})

test('Apache-2.0 with custom author', async t => {
  const apache = fs.readFileSync('../licenses/apache-2.0', 'utf8')
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{year}/, new Date().getFullYear())
  t.is(await lissie({ license: 'apache-2.0', author: 'Zach Orlovsky' }), apache)
})

test('Apache-2.0 with custom year', async t => {
  const apache = fs.readFileSync('../licenses/apache-2.0', 'utf8')
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{year}/, '2013')
  t.is(await lissie({ license: 'apache-2.0', year: '2013' }), apache)
})

test('Apache-2.0 with custom author and custom year', async t => {
  const apache = fs.readFileSync('../licenses/apache-2.0', 'utf8')
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{year}/, '2013')
  t.is(await lissie({ license: 'apache-2.0', author: 'Zach Orlovsky', year: '2013' }), apache)
})

test('ISC', async t => {
  const isc = fs.readFileSync('../licenses/isc', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(await lissie({ license: 'isc' }), isc)
})

test('ISC with custom author', async t => {
  const isc = fs.readFileSync('../licenses/isc', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(await lissie({ license: 'isc', author: 'Zach Orlovsky' }), isc)
})

test('ISC with custom year', async t => {
  const isc = fs.readFileSync('../licenses/isc', 'utf8')
    .replace(/{year}/, '2011')
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(await lissie({ license: 'isc', year: '2011' }), isc)
})

test('ISC with custom author and custom year', async t => {
  const isc = fs.readFileSync('../licenses/isc', 'utf8')
    .replace(/{year}/, '2011')
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(await lissie({ license: 'isc', author: 'Zach Orlovsky', year: '2011' }), isc)
})

test('MPL-2.0', async t => {
  const mpl = fs.readFileSync('../licenses/mpl-2.0', 'utf8')
  t.is(await lissie({ license: 'mpl-2.0' }), mpl)
})

test('GPL-3.0', async t => {
  const gpl3 = fs.readFileSync('../licenses/gpl-3.0', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(await lissie({ license: 'gpl-3.0' }), gpl3)
})

test('GPL-3.0 with author', async t => {
  const gpl3 = fs.readFileSync('../licenses/gpl-3.0', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(await lissie({ license: 'gpl-3.0', author: 'Zach Orlovsky' }), gpl3)
})

test('GPL-3.0 with year', async t => {
  const gpl3 = fs.readFileSync('../licenses/gpl-3.0', 'utf8')
    .replace(/{year}/, '2015')
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(await lissie({ license: 'gpl-3.0', year: '2015' }), gpl3)
})

test('GPL-3.0 with project name', async t => {
  const gpl3 = fs.readFileSync('../licenses/gpl-3.0', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{project}/, 'lissie')
  t.is(await lissie({ license: 'gpl-3.0', project: 'lissie' }), gpl3)
})

test('GPL-3.0 with all custom', async t => {
  const gpl3 = fs.readFileSync('../licenses/gpl-3.0', 'utf8')
    .replace(/{year}/, '2014')
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{project}/, 'lissie')
  t.is(await lissie({ license: 'gpl-3.0', author: 'Zach Orlovsky', year: '2014', project: 'lissie' }), gpl3)
})
