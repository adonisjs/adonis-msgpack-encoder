const path = require('path')

module.exports = {
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'msgpack.browser.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
