# Lissie

> cli tool that displays a LICENSE text

## Usage

### CLI

```bash
$ npx lissie # MIT by default
$ npx lissie mit -a 'Zach Orlovsky' # author full name
```

Save to LICENSE file:

```bash
$ npx lissie MIT > LICENSE.md
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

### Magic :sparkles:

`lissie` can guess your full name, email and the name of project you want license for. So run just

```bash
$ npx lissie
```

and `lissie` will display `MIT License` text with your full name and current year. Also you can disable magic with `--no-magic` option. In this case you have to change some info on your own.
