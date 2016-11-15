const buble = require('buble')

module.exports = function (data) {
  const config = this.config.buble
  return new Promise(resolve => {
    const result = buble.transform(data.text, config)
    resolve(result.code)
  })
}
