const TerserPlugin = require('terser-webpack-plugin')

module.exports = () => ({
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  }
})
