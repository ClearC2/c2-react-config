const postCSSLoader = require('./partials/postcss-loader')

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [
          /\.module\.css$/
        ],
        use: [
          'style-loader',
          'css-loader',
          postCSSLoader
        ]
      }
    ]
  }
})
