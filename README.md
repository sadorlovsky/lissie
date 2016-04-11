# Lissie

[![Build Status](https://travis-ci.org/sadorlovsky/lissie.svg?branch=master)](https://travis-ci.org/sadorlovsky/lissie)
[![Coverage Status](https://coveralls.io/repos/github/sadorlovsky/lissie/badge.svg?branch=master)](https://coveralls.io/github/sadorlovsky/lissie?branch=master)

*WORK IN PROGRESS*

## Usage
### CLI
```bash
npm install -g lissie
```

```bash
$ lissie mit -a "Zach Orlovsky"
```
###### Options
```
-a, --author "<your name>"
-y, --year <year>
-e, --email "<your email>"
-p, --project "<project name>"
-v, --version
-h, --help
```

### Node.js
```bash
npm install lissie --save
```

```javascript
import lissie from 'lissie'

lissie({
  license: 'mit'
  author: 'Zach Orlovsky',
  email: 'sadorlovsky@gmail.com'
})
```
###### API
```javascript
lissie({
  license: '<license>',      // default: 'mit'
  author: '<your name>',     // default: env.USER
  year: '<year>',            // default: Date().getFullYear()
  email: '<your email>',     // default: ''
  project: '<project name>', // default: ''
})
```
