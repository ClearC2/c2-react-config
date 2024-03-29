const path = require('path')
const webpackConfig = require('../webpack/webpack.config')

// add provide to common presets
const {presets} = webpackConfig
presets.common = presets.common.concat(['provide'])
// add analyzer to inspect bundle
// presets.production = presets.production.concat(['analyzer'])

module.exports = (env) => {
  env.presetDir = path.join(__dirname, 'webpack')
  env.projectDir = __dirname
  return webpackConfig(env)
}
