const postCSSLoader = require('./partials/postcss-loader')

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          postCSSLoader,
          'sass-loader'
        ]
      }
    ]
  }
})
