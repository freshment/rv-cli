const path = require('path')

const resolve = function (src) {
  return path.resolve(__dirname, src)
}

module.exports = {
  mode: 'development',
  entry: resolve('../src/main.js'),
  output: {
    path: resolve('../dist'),
    filename: 'my-test-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  }
}
