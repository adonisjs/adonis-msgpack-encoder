const path = require('path')
const baseConfig = require('./webpack.base.js')

module.exports = [
  Object.assign({}, baseConfig, {
    entry: path.join(__dirname, './browser.js'),
    output: {
      path: path.join(__dirname, './dist'),
      filename: 'msgpack.es.js',
      libraryTarget: 'commonjs-module'
    }
  }),
  Object.assign({}, baseConfig, {
    entry: path.join(__dirname, './browser.js'),
    output: {
      path: path.join(__dirname, './dist'),
      filename: 'msgpack.browser.js',
      libraryTarget: 'umd'
    },
    mode: 'production'
  })
]
