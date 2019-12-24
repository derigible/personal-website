const webpack = require('webpack')
const { resolve } = require('path')
const baseConfig = require('@instructure/ui-webpack-config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

require('dotenv').config()

const src = resolve(__dirname, 'src')

const ENV = [
  'API_HOST',
  'API_PROTOCOL',
  'NODE_ENV'
].reduce((env, name) => {
  // eslint-disable-next-line no-param-reassign
  env[name] = JSON.stringify(process.env[name])
  return env
}, {})

const webpackDevServerUrl = process.env.SERVER_URL || 'http://localhost:8081/'

const buildPlugins = [
  new webpack.DefinePlugin({
      'process.env': ENV
  }),
  new HtmlWebpackPlugin({
    chunksSortMode: 'dependency',
    inject: true,
    template: 'src/index.html'
  }),
  new webpack.HotModuleReplacementPlugin()
]

const buildConfig = {
  mode: 'development',
  devServer: {
    clientLogLevel: 'warning',
    contentBase: './src/',
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    inline: true,
    noInfo: false,
    publicPath: webpackDevServerUrl,
    public: 'localhost:8081',
    stats: {
      assets: true,
      cached: true,
      cachedAssets: false,
      children: false,
      chunkModules: false,
      chunkOrigins: false,
      chunks: false,
      colors: true,
      errorDetails: true,
      errors: true,
      hash: true,
      modules: false,
      publicPath: true,
      reasons: false,
      source: false,
      timings: true,
      version: false,
      warnings: false
    }
  }
}
const buildOutput = {
  chunkFilename: '[name].js',
  filename: '[name].js',
  publicPath: webpackDevServerUrl
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    return {
      ...baseConfig,
      ...buildConfig,
      output: {
        ...baseConfig.output,
        ...buildOutput
      },
      plugins: [ ...baseConfig.plugins, ...buildPlugins ],
      module: {
        // note: put your rules first
        rules: [...baseConfig.module.rules ]
      },
      resolveLoader: {
        alias: { ...baseConfig.resolveLoader.alias }
      }
    }
  }

  if (argv.mode === 'production') {
    return {
      ...baseConfig,
      context: src,
      mode: "production",
      bail: true,
      devtool: false, // webpack build uses too much memory with source maps
      entry: './index.js',
      output: Object.assign({}, baseConfig.output, buildOutput, {publicPath: '/'}),
      plugins: [
        ...baseConfig.plugins,
        new HtmlWebpackPlugin({
          inject: true,
          template: 'index.html',
          minify: {
            collapseWhitespace: true,
            minifyCSS: true,
            removeAttributeQuotes: true,
            removeOptionalTags: true,
            removeScriptTypeAttributes: true
          }
        }),
        new ScriptExtHtmlWebpackPlugin({
          defaultAttribute: 'defer',
          inline: 'manifest'
        })
      ].filter((p) => p)
    }
  }
}
