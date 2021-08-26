const Webpack = require('webpack')
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  }, 
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'),
    }),
    new MiniCssExtractPlugin({
        filename: 'bundle.css',
    }),   
  ],
  module: {
    rules: [     
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      }, 
      {
        test: /\.s?css/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
      }, 
    ]
  }
};