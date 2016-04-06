import fs from 'fs'
import test from 'ava'
import lisa from '../src/lisa'

test('MIT by default', t => {
  const mit = fs.readFileSync('../licenses/mit', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, process.env.USER)
  t.is(lisa({}), mit)
})

test('MIT', t => {
  const mit = fs.readFileSync('../licenses/mit', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, process.env.USER)
  t.is(lisa({license: 'mit'}), mit)
})

test('MIT with custom author', t => {
  const mit = fs.readFileSync('../licenses/mit', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(lisa({license: 'mit', author: 'Zach Orlovsky'}), mit)
})

test('MIT with custom year', t => {
  const mit = fs.readFileSync('../licenses/mit', 'utf8')
    .replace(/{year}/, '2011')
    .replace(/{author}/, process.env.USER)
  t.is(lisa({license: 'mit', year: '2011'}), mit)
})

test('MIT with custom author and custom year', t => {
  const mit = fs.readFileSync('../licenses/mit', 'utf8')
    .replace(/{year}/, '2011')
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(lisa({license: 'mit', author: 'Zach Orlovsky', year: '2011'}), mit)
})

test('WTFPL', t => {
  const wtfpl = fs.readFileSync('../licenses/wtfpl', 'utf8')
    .replace(/{author}/, process.env.USER)
  t.is(lisa({license: 'wtfpl'}), wtfpl)
})

test('WTFPL with custom author', t => {
  const wtfpl = fs.readFileSync('../licenses/wtfpl', 'utf8')
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(lisa({license: 'wtfpl', author: 'Zach Orlovsky'}), wtfpl)
})

test('WTFPL with custom author', t => {
  const wtfpl = fs.readFileSync('../licenses/wtfpl', 'utf8')
    .replace(/{author}/, process.env.USER)
    .replace(/{email}/, 'sadorlovsky@gmail.com')
  t.is(lisa({license: 'wtfpl', email: 'sadorlovsky@gmail.com'}), wtfpl)
})

test('WTFPL with custom author and email', t => {
  const wtfpl = fs.readFileSync('../licenses/wtfpl', 'utf8')
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{email}/, 'sadorlovsky@gmail.com')
  t.is(lisa({license: 'wtfpl', author: 'Zach Orlovsky', email: 'sadorlovsky@gmail.com'}), wtfpl)
})

test('Apache-2.0', t => {
  const apache = fs.readFileSync('../licenses/apache-2.0', 'utf8')
    .replace(/{author}/, process.env.USER)
    .replace(/{year}/, new Date().getFullYear())
  t.is(lisa({license: 'apache-2.0'}), apache)
})

test('Apache-2.0 with custom author', t => {
  const apache = fs.readFileSync('../licenses/apache-2.0', 'utf8')
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{year}/, new Date().getFullYear())
  t.is(lisa({license: 'apache-2.0', author: 'Zach Orlovsky'}), apache)
})

test('Apache-2.0 with custom year', t => {
  const apache = fs.readFileSync('../licenses/apache-2.0', 'utf8')
    .replace(/{author}/, process.env.USER)
    .replace(/{year}/, '2013')
  t.is(lisa({license: 'apache-2.0', year: '2013'}), apache)
})

test('Apache-2.0 with custom author and custom year', t => {
  const apache = fs.readFileSync('../licenses/apache-2.0', 'utf8')
    .replace(/{author}/, 'Zach Orlovsky')
    .replace(/{year}/, '2013')
  t.is(lisa({license: 'apache-2.0', author: 'Zach Orlovsky', year: '2013'}), apache)
})

test('ISC', t => {
  const isc = fs.readFileSync('../licenses/isc', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, process.env.USER)
  t.is(lisa({license: 'isc'}), isc)
})

test('ISC with custom author', t => {
  const isc = fs.readFileSync('../licenses/isc', 'utf8')
    .replace(/{year}/, new Date().getFullYear())
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(lisa({license: 'isc', author: 'Zach Orlovsky'}), isc)
})

test('ISC with custom year', t => {
  const isc = fs.readFileSync('../licenses/isc', 'utf8')
    .replace(/{year}/, '2011')
    .replace(/{author}/, process.env.USER)
  t.is(lisa({license: 'isc', year: '2011'}), isc)
})

test('ISC with custom author and custom year', t => {
  const isc = fs.readFileSync('../licenses/isc', 'utf8')
    .replace(/{year}/, '2011')
    .replace(/{author}/, 'Zach Orlovsky')
  t.is(lisa({license: 'isc', author: 'Zach Orlovsky', year: '2011'}), isc)
})

test('MPL-2.0', t => {
  const mpl = fs.readFileSync('../licenses/mpl-2.0', 'utf8')
  t.is(lisa({license: 'mpl-2.0'}), mpl)
})
