const webpack = require('webpack')
const path = require('path')

const config = {
  entry: path.resolve(__dirname, '../assets/js/src/index.js'),
  output: {
    path: path.resolve(__dirname, '../assets/js/build'),
    filename: 'bundle.js'
  }
}
