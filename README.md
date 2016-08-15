# Lissie

[![Build Status](https://travis-ci.org/sadorlovsky/lissie.svg?branch=master)](https://travis-ci.org/sadorlovsky/lissie)
[![Coverage Status](https://coveralls.io/repos/github/sadorlovsky/lissie/badge.svg?branch=master)](https://coveralls.io/github/sadorlovsky/lissie?branch=master)

### WORK IN PROGRESS

## Usage
### CLI
```bash
npm install -g lissie
```

```bash
$ lissie # MIT by default
$ lissie ls # list available licenses
$ lissie mit -a 'Zach Orlovsky' # author full name
```

### Node.js
```bash
npm install lissie --save
```

```javascript
import lissie from 'lissie'

lissie({
  license: 'mit',
  author: 'Zach Orlovsky'
})
```
