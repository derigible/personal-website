const webpack = require('webpack')
const sharedWebpack = require('./webpack.shared.config.js')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')

const productionWebpack = {
  bail: true,
  devtool: 'source-map',
  entry: {
    bundle: ['babel-polyfill', './src/main.js'],
    vendor: ['react', 'middle-router', 'lodash']
  },
  output: {
    path: path.join(__dirname, '/__build__'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js'),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      // once inst-ui generates var names differently
      // mangle can be set to true
      mangle: false,
      comments: false,
      compress: {
        screw_ie8: true,
        unsafe: true,
        warnings: false
      }
    }),
    new CompressionPlugin({
      threshold: 1024
    })
  ].concat(sharedWebpack.plugins)
}

module.exports = Object.assign({}, sharedWebpack, productionWebpack)
