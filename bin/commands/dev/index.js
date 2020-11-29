const path = require('path')
const webpack = require('webpack')
const webpackConfig = require(rootPath('config/webpack.dev'))
const WebpackDevServer = require('webpack-dev-server')

function rootPath (src) {
  const pathStr = path.resolve(__dirname, './../../../', src)
  return pathStr
}

module.exports = () => {
	const tempaltePath = path.resolve(process.cwd(), './config/webpack.dev.js')
	const tempalteConfig = require(tempaltePath)
	console.log('tempalteConfig:', tempalteConfig )
  const compiler = webpack(webpackConfig)
  const devServerOptions = Object.assign({}, webpackConfig.devServer, {
    open: true,
    stats: {
      colors: true
    }
  })
  const server = new WebpackDevServer(compiler, devServerOptions)

  server.listen(3000, '127.0.0.1', () => {
    console.log('Starting server on http://127.0.0.1:3000')
  })
}
