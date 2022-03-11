const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = () => ({
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!.gitignore', '!favicon.ico']
    })
  ]
})
