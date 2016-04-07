import fs from 'fs'
import test from 'ava'
import lissie from '../src/lissie'

test('MIT by default', t => {
  const mit = fs.readFileSync('../licenses/mit', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, process.env.USER)
  t.is(lissie({}), mit)
})

test('MIT', t => {
  const mit = fs.readFileSync('../licenses/mit', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, process.env.USER)
  t.is(lissie({license: 'mit'}), mit)
})

test('MIT with custom author', t => {
  const mit = fs.readFileSync('../licenses/mit', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(lissie({license: 'mit', author: 'Zach Orlovsky'}), mit)
})

test('MIT with custom year', t => {
  const mit = fs.readFileSync('../licenses/mit', 'utf8')
    .replace(/{year}/, '2011')
    .replace(/{author}/, process.env.USER)
  t.is(lissie({license: 'mit', year: '2011'}), mit)
})

test('MIT with custom author and custom year', t => {
  const mit = fs.readFileSync('../licenses/mit', 'utf8')
    .replace(/{year}/, '2011')
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(lissie({license: 'mit', author: 'Zach Orlovsky', year: '2011'}), mit)
})

test('WTFPL', t => {
  const wtfpl = fs.readFileSync('../licenses/wtfpl', 'utf8')
    .replace(/{author}/, process.env.USER)
  t.is(lissie({license: 'wtfpl'}), wtfpl)
})

test('WTFPL with custom author', t => {
  const wtfpl = fs.readFileSync('../licenses/wtfpl', 'utf8')
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(lissie({license: 'wtfpl', author: 'Zach Orlovsky'}), wtfpl)
})

test('WTFPL with custom author', t => {
  const wtfpl = fs.readFileSync('../licenses/wtfpl', 'utf8')
    .replace(/{author}/, process.env.USER)
    .replace(/{email}/, 'sadorlovsky@gmail.com')
  t.is(lissie({license: 'wtfpl', email: 'sadorlovsky@gmail.com'}), wtfpl)
})

test('WTFPL with custom author and email', t => {
  const wtfpl = fs.readFileSync('../licenses/wtfpl', 'utf8')
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{email}/, 'sadorlovsky@gmail.com')
  t.is(lissie({license: 'wtfpl', author: 'Zach Orlovsky', email: 'sadorlovsky@gmail.com'}), wtfpl)
})

test('Apache-2.0', t => {
  const apache = fs.readFileSync('../licenses/apache-2.0', 'utf8')
    .replace(/{author}/, process.env.USER)
    .replace(/{year}/, new Date().getFullYear())
  t.is(lissie({license: 'apache-2.0'}), apache)
})

test('Apache-2.0 with custom author', t => {
  const apache = fs.readFileSync('../licenses/apache-2.0', 'utf8')
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{year}/, new Date().getFullYear())
  t.is(lissie({license: 'apache-2.0', author: 'Zach Orlovsky'}), apache)
})

test('Apache-2.0 with custom year', t => {
  const apache = fs.readFileSync('../licenses/apache-2.0', 'utf8')
    .replace(/{author}/, process.env.USER)
    .replace(/{year}/, '2013')
  t.is(lissie({license: 'apache-2.0', year: '2013'}), apache)
})

test('Apache-2.0 with custom author and custom year', t => {
  const apache = fs.readFileSync('../licenses/apache-2.0', 'utf8')
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{year}/, '2013')
  t.is(lissie({license: 'apache-2.0', author: 'Zach Orlovsky', year: '2013'}), apache)
})

test('ISC', t => {
  const isc = fs.readFileSync('../licenses/isc', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, process.env.USER)
  t.is(lissie({license: 'isc'}), isc)
})

test('ISC with custom author', t => {
  const isc = fs.readFileSync('../licenses/isc', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(lissie({license: 'isc', author: 'Zach Orlovsky'}), isc)
})

test('ISC with custom year', t => {
  const isc = fs.readFileSync('../licenses/isc', 'utf8')
    .replace(/{year}/, '2011')
    .replace(/{author}/, process.env.USER)
  t.is(lissie({license: 'isc', year: '2011'}), isc)
})

test('ISC with custom author and custom year', t => {
  const isc = fs.readFileSync('../licenses/isc', 'utf8')
    .replace(/{year}/, '2011')
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(lissie({license: 'isc', author: 'Zach Orlovsky', year: '2011'}), isc)
})

test('MPL-2.0', t => {
  const mpl = fs.readFileSync('../licenses/mpl-2.0', 'utf8')
  t.is(lissie({license: 'mpl-2.0'}), mpl)
})

test('GPL-3.0', t => {
  const gpl3 = fs.readFileSync('../licenses/gpl-3.0', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, process.env.USER)
  t.is(lissie({license: 'gpl-3.0'}), gpl3)
})

test('GPL-3.0 with author', t => {
  const gpl3 = fs.readFileSync('../licenses/gpl-3.0', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(lissie({license: 'gpl-3.0', author: 'Zach Orlovsky'}), gpl3)
})

test('GPL-3.0 with year', t => {
  const gpl3 = fs.readFileSync('../licenses/gpl-3.0', 'utf8')
    .replace(/{year}/, '2015')
    .replace(/{author}/, process.env.USER)
  t.is(lissie({license: 'gpl-3.0', year: '2015'}), gpl3)
})

test('GPL-3.0 with project name', t => {
  const gpl3 = fs.readFileSync('../licenses/gpl-3.0', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, process.env.USER)
    .replace(/{project}/, 'lissie')
  t.is(lissie({license: 'gpl-3.0', project: 'lissie'}), gpl3)
})

test('GPL-3.0 with project name', t => {
  const gpl3 = fs.readFileSync('../licenses/gpl-3.0', 'utf8')
    .replace(/{year}/, '2014')
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{project}/, 'lissie')
  t.is(lissie({license: 'gpl-3.0', author: 'Zach Orlovsky', year: '2014', project: 'lissie'}), gpl3)
})
