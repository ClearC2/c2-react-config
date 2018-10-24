const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env) => ({
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: env.presets.includes('source-map')
      })
    ]
  }
})
