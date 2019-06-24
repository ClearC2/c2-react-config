const path = require('path')

module.exports = (env) => ({
  entry: [
    require.resolve('core-js/stable'),
    require.resolve('regenerator-runtime/runtime'),
    require.resolve('url-search-params-polyfill'),
    path.join(env.projectDir, 'src', 'index.js')
  ]
})
