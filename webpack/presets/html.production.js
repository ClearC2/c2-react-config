const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(env.projectDir, 'src', 'index.html')
    })
  ]
})
