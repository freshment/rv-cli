const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const resolve = function (src) {
  return path.resolve(process.cwd(), src)
}


module.exports = {
  mode: 'development',
  entry: resolve('./src/main.js'),
  context: path.resolve(__dirname, './../'),
  output: {
    path: resolve('dist'),
    filename: 'my-test-bundle.js'
  },
  devServer: {
    contentBase: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            // options: require(path.resolve(__dirname, '../.babelrc'))
            options: {
              presets: [
                require('@babel/preset-env')
              ],
              plugins: [
                require('@babel/plugin-transform-runtime'),
                require('@babel/plugin-proposal-class-properties')
              ]
            }
          }
        ]
        // include: [resolve('./src')]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
}
