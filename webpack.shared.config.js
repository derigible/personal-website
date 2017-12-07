const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
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
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: 'dependency',
      filename: 'index.html',
      inject: true,
      template: 'dist/index.ejs',
      title: 'Phillips Family'
    })
  ]
}
