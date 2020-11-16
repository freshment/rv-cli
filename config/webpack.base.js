const path = require('path')

const resolve = function (path) {
  return path.resolve(__dirname, path)
}

module.exports = {
  entry: resolve('/src/main.js'),
  output: {
    path: resolve('dist'),
    filename: 'my-test-bundle.js'
  },
  modue: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {

            }
          }
        ]
      }
    ]
  }
}
