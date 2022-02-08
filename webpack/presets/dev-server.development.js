const path = require('path')

module.exports = (env) => ({
  devServer: {
    static: path.join(env.projectDir, 'dist'),
    historyApiFallback: true,
    port: 8080,
    client: {
      overlay: {
        warnings: true,
        errors: true
      }
    }
  }
})
