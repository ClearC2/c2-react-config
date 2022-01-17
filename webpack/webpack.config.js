const webpackMerge = require('webpack-merge')
const applyPresets = require('./applyPresets')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
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
    'clean'
  ],
  production: [
    'optimize'
  ],
  development: [
    'dev-server',
    'hot'
  ]
}

const webpackConfig = async (env) => {
  env.mode = env.mode || 'production'
  const devPresets = presets.common.concat(presets.development)
  const prodPresets = presets.common.concat(presets.production)
  env.presets = env.presets || (env.mode === 'development' ? devPresets : prodPresets)
  return webpackMerge(
    {
      mode: env.mode,
      target: env.mode === "development" ? "web" : undefined,
      module: {
        rules: [
          {
            test: /\.[jt]sx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: require.resolve('babel-loader'),
                options: {
                  plugins: [require.resolve('react-refresh/babel')].filter(Boolean),
                },
              },
            ],
          },
        ],
      },
      plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean),
    },
    await applyPresets(env)
  )
}

module.exports = webpackConfig
module.exports.presets = presets
