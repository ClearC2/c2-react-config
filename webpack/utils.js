const webpackMerge = require('webpack-merge')

const getPreset = (env, presetName) => {
  return require(`./presets/${presetName}`)(env)
}

const extendPreset = (env, presetName, config) => {
  return webpackMerge(getPreset(env, presetName), config)
}

module.exports = {
  getPreset,
  extendPreset
}
