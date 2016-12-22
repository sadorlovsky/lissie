# Lissie

[![Build Status](https://travis-ci.org/sadorlovsky/lissie.svg?branch=master)](https://travis-ci.org/sadorlovsky/lissie)
[![Coverage Status](https://coveralls.io/repos/github/sadorlovsky/lissie/badge.svg?branch=master)](https://coveralls.io/github/sadorlovsky/lissie?branch=master)

## Usage
### CLI
```bash
$ npm install -g lissie
```

```bash
$ license # MIT by default
$ license mit -a 'Zach Orlovsky' # author full name
```
Save to LICENSE file:

```bash
$ license MIT > LICENSE.md
```

### Node.js
```bash
$ npm install lissie --save
```

```javascript
import license from 'lissie'

license('MIT', {
  author: 'Zach Orlovsky'
})
```

### Magic :sparkles:

`lissie` can guess your full name, email and the name of project you want license for. So run just
```
$ license
```
and `lissie` will generate MIT License text with your full name and current year. Also you can disable magic with `--no-magic` option. In this case you will have to change some info on your own.

## License

MIT © [Zach Orlovsky](https://orlovsky.rocks)
