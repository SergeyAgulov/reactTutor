const webpack = require('webpack')
const postcssCalc = require('postcss-calc');
const postcssAssets = require('postcss-assets');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public/build/",
    publicPath: "build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style-loader!css-loader!postcss-loader"
    }]
  },
  postcss: function () {
    return [postcssAssets, precss, postcssCalc, autoprefixer({ browsers: 'last 10 versions' })];
  }
}