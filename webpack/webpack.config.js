const webpackMerge = require('webpack-merge')
const applyPresets = require('./applyPresets')

const presets = {
  common: [
    'input',
    'output',
    'assets',
    'babel',
    'css',
    'css-modules',
    'html',
    'progress',
    'source-map',
    'clean'
  ],
  production: [
    'optimize'
  ],
  development: [
    'dev-server'
  ]
}

const webpackConfig = (env) => {
  env.mode = env.mode || 'production'
  const devPresets = presets.common.concat(presets.development)
  const prodPresets = presets.common.concat(presets.production)
  env.presets = env.presets || (env.mode === 'development' ? devPresets : prodPresets)
  return webpackMerge(
    {
      mode: env.mode
    },
    applyPresets(env)
  )
}

module.exports = webpackConfig
module.exports.presets = presets
