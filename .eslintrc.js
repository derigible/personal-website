/* .eslintrc.js */
const defaultEslint = require('@instructure/ui-eslint-config')
module.exports = Object.assign(
  {},
  defaultEslint,
  {
    rules: Object.assign(
      {},
      defaultEslint.rules,
      {
        'no-useless-catch': [0],
        'notice/notice': [0],
        'no-case-declarations': [0],
        'no-undefined': [0],
        'no-console': [0],
      }
    )
  }
)
