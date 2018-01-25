const config = require('./configs')
const path = require('path')

module.exports = {
  devtool: 'eval',
  entry: ['babel-polyfill', './dev/index.js'],
  output: {
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(woff2?|ttf|eot|svg|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(mp3|mp4)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      [config.name]: path.join(__dirname, 'src')
    },
    modules: ['node_modules', 'src', 'dev'],
    extensions: ['.js', '.jsx']
  }
}
