module.exports = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: () => ([
        require('precss'),
        require('autoprefixer')
      ])
    }
  }
}
