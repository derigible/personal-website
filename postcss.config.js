// TODO: Figure out if this file is still needed.

const {
  variables, media: extensions
} = require('./src/shared/styles/variables')

console.log('here')

module.exports = function postcss () {
  return {
    plugins: {
      'postcss-import': {},
      'postcss-url': {url: 'inline'},
      'postcss-cssnext': {
        browsers: ['last 2 versions'],
        features: {
          customProperties: { variables },
          customMedia: { extensions }
        }
      },
      'postcss-browser-reporter': {},
      'postcss-reporter': {}
    }
  }
}
