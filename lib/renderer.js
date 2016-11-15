const buble = require('buble')
const match = require('multimatch')

function shouldTransform(path, include) {
  if (!include) {
    return true
  }
  return match(path, include).length > 0
}

module.exports = function (data) {
  const config = this.config.buble
  const include = config.include
  delete config.include

  return new Promise(resolve => {
    if (!data.path || !shouldTransform(data.path, include)) {
      return resolve(data.text)
    }
    const result = buble.transform(data.text, config)
    resolve(result.code)
  })
}
