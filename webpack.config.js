const webpack = require('webpack')
const path = require('path')

const config = {
  entry: path.resolve(__dirname, 'assets/js/src/index.js'),
  output: {
    path: path.resolve(__dirname, 'assets/js/build'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'assets/js/src')
      components: path.resolve(__dirname, 'assets/js/src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'assets/js/src'),
      }
    ]
  }
}

module.exports = config
