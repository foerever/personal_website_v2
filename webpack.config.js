
/*
    ./webpack.config.js
*/
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html', inject: 'body' })
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|pdf)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}