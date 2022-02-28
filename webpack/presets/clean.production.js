const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = (env) => ({
  plugins: [
    new CleanWebpackPlugin({
      root: env.projectDir,
      exclude: ['.gitignore', 'favicon.ico']
    })
  ]
})
