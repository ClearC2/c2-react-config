const URL_LOADER_LIMIT = 8192

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              limit: URL_LOADER_LIMIT
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              limit: URL_LOADER_LIMIT,
              mimetype: 'application/font-woff'
            }
          }
        ]
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              limit: URL_LOADER_LIMIT,
              mimetype: 'application/octet-stream'
            }
          }
        ]
      },
      {
        test: /\.mp3$/,
        use: ['file-loader']
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'images/',
              name: '[name].[ext]',
              limit: URL_LOADER_LIMIT,
              mimetype: 'image/svg+xml'
            }
          }
        ]
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
