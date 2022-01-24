const URL_LOADER_LIMIT = 8192

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
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'images/',
              name: '[name].[ext]',
              limit: URL_LOADER_LIMIT
            }
          }
        ]
      }
    ]
  }
})
