# hexo-renderer-buble

[![NPM version](https://img.shields.io/npm/v/hexo-renderer-buble.svg?style=flat-square)](https://npmjs.com/package/hexo-renderer-buble) [![NPM downloads](https://img.shields.io/npm/dm/hexo-renderer-buble.svg?style=flat-square)](https://npmjs.com/package/hexo-renderer-buble) [![Build Status](https://img.shields.io/circleci/project/egoist/hexo-renderer-buble/master.svg?style=flat-square)](https://circleci.com/gh/egoist/hexo-renderer-buble)

## Install

```bash
$ npm install --save hexo-renderer-buble
```

## Usage

Just install this package and you're all set, if you want custom options for buble, simply do:

```yml
# _config.yml
buble:
  transforms:
    dangerousForOf: true
```

Check out all buble options: https://buble.surge.sh/guide/#using-the-javascript-api

### include

By default it transforms all `.js` `.jsx` `.es6` files, but you can also set `include` to transform specified files only:

```yml
buble:
  include: **/foo.js
  # or array
  include:
    - **/foo.js
    - **/js/bar.js
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
