// 该 webpack  是适用于 tempalte 项目的webpack配置
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const resolve = function (src) {
  return path.resolve(__dirname, '../', src)
}

module.exports = {
  mode: 'development',
  entry: resolve('./src/main.js'),
  output: {
    path: resolve('dist'),
    filename: 'my-test-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
}
