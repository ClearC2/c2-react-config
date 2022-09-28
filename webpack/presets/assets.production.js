module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
      },
      {
        test: /\.mp3$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset'
      }
    ]
  }
})
