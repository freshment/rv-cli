// 该 webpack  是适用于 cli 项目 template 的webpack配置
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const resolve = function (src) {
  return path.resolve(__dirname, src)
}

module.exports = {
  mode: 'development',
  entry: resolve('../template/base-template/src/main.js'),
  output: {
    path: resolve('../dist'),
    filename: 'my-test-bundle.js',
    publicPath: '/'
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
          }
        ],
        include: [resolve('./src')]
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jpg|\.png|\.jpeg|\.gif$/,
        loader: 'url-loader',
        options: {
          limit: 8192, // 8kb
          name: 'assets/img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('../template/base-template/index.html')
    })
  ]
}
