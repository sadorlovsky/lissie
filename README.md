# Lissie

[![Build Status](https://travis-ci.org/sadorlovsky/lissie.svg?branch=master)](https://travis-ci.org/sadorlovsky/lissie)
[![Coverage Status](https://coveralls.io/repos/github/sadorlovsky/lissie/badge.svg?branch=master)](https://coveralls.io/github/sadorlovsky/lissie?branch=master)

### WORK IN PROGRESS

## Usage
### CLI
```bash
$ npm install -g lissie
```

```bash
$ license # MIT by default
$ license mit -a 'Zach Orlovsky' # author full name
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
