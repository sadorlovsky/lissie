# Lissie

> CLI tool that displays a LICENSE text

## Usage

### CLI

```bash
$ npx lissie # MIT by default
$ npx lissie apache -a 'Zach Orlovsky' # author full name
```

Save to LICENSE file:

```bash
$ npx lissie > LICENSE.md
```

### Node.js

```bash
$ yarn add lissie
```

```ts
import license from 'lissie'

license('MIT', {
  author: 'Zach Orlovsky'
})
```
