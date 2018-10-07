module.exports = {
  loader: 'postcss-loader',
  options: {
    plugins: () => ([
      require('precss'),
      require('autoprefixer')
    ])
  }
}
