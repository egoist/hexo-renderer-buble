const renderer = require('../lib/renderer')

test('main', () => {
  return renderer.call({config: {
    buble: {
      objectAssign: 'lol.assign'
    }
  }}, {text: 'const foo = {...{}};', path: '/foo.js'})
    .then(code => {
      expect(code).toBe('var foo = lol.assign({}, {});')
    })
})
