/* globals hexo */
const renderer = require('./renderer')

hexo.extend.renderer.register('js', 'js', renderer)
hexo.extend.renderer.register('es6', 'js', renderer)
hexo.extend.renderer.register('jsx', 'js', renderer)
