const path = require('path')
const webpackMerge = require('webpack-merge')
const fs = require('fs')

const getProjectPreset = (env, presetName) => {
  const {presetDir} = env
  if (!presetDir) return null
  const basePath = path.join(presetDir, presetName)
  return requirePreset(env, basePath)
}

const getDefaultPreset = (env, presetName) => {
  const basePath = path.join(__dirname, 'presets', presetName)
  return requirePreset(env, basePath)
}

const requirePreset = (env, basePath) => {
  const {mode} = env
  const modePath = `${basePath}.${mode}`
  const presetPath = fs.existsSync(`${modePath}.js`) ? modePath : `${basePath}.production`
  const preset = require(presetPath)
  return typeof preset === 'function' ? preset(env) : preset
}

const applyPresets = (env) => {
  const {presets} = env
  const mergedConfigs = presets.map(
    presetName => {
      let config
      try {
        config = getProjectPreset(env, presetName)
      } catch (err) {}
      return config || getDefaultPreset(env, presetName)
    }
  )

  return webpackMerge({}, ...mergedConfigs)
}

module.exports = applyPresets
