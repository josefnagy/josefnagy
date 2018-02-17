const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const path = require('path');

module.exports = {
  entry: [
    './src/scripts/index.js',
    './src/index.pug'
  ],

  output: {
    path: path.resolve('./', 'dist'),
    filename: './scripts/index.js'
  },

  module: {
    rules: [{
      test: /\.pug$/,
      use: [
        "file-loader?name=../dist/[name].html",
        "extract-loader",
        "html-loader",
        "pug-html-loader"
      ]
    }]
  }
}
