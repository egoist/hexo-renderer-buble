/* globals hexo */
const renderer = require('./renderer')

hexo.extend.renderer.register('js', 'js', renderer)
