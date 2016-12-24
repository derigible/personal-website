const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style',
          'css?importLoaders=1&modules&localIdentName=derigible-[folder]-[name]__[local]',
          'postcss'
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: [ 'style', 'css' ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: 'dependency',
      filename: 'index.html',
      inject: true,
      template: 'dist/index.ejs',
      title: 'Instructure Quizzes'
    })
  ],
  postcss (webpack) {
    const srcCss = require('./src/shared/styles/variables')
    return [
      require('postcss-import')({addDependencyTo: webpack}),
      require('postcss-url')({url: 'inline'}),
      require('postcss-cssnext')({
        browsers: ['last 2 versions'],
        features: {
          customProperties: { variables: srcCss.variables },
          customMedia: { extensions: srcCss.media }
        }
      }),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
  }
}
