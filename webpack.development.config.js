const sharedWebpack = require('./webpack.shared.config.js')

const developmentWebpack = {
  debug: true,
  devtool: 'cheap-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],
  output: Object.assign({}, sharedWebpack.output, {
    pathinfo: true
  }),
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  }
}

module.exports = Object.assign({}, sharedWebpack, developmentWebpack)
