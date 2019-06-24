const path = require('path')

module.exports = (env) => ({
  entry: [
    'core-js/stable',
    'regenerator-runtime/runtime',
    'url-search-params-polyfill',
    path.join(env.projectDir, 'src', 'index.js')
  ]
})
