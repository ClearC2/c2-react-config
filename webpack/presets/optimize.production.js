const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = () => ({
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  }
})
