const renderer = require('../lib/renderer')

test('main', () => {
  return renderer.call({config: {
    buble: {
      objectAssign: 'lol.assign'
    }
  }}, 'const foo = {...{}};')
    .then(code => {
      expect(code).toBe('var foo = lol.assign({}, {});')
    })
})
