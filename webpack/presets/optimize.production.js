const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env) => ({
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  }
})
