const path = require('path')

module.exports = (env) => ({
  devServer: {
    contentBase: path.join(env.projectDir, 'dist'),
    historyApiFallback: true,
    port: 8080,
    overlay: {
      warnings: true,
      errors: true
    }
  }
})
