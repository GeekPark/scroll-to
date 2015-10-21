const path = require('path');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'dev';

var config = {
  context: __dirname,
  entry: ['app.js'],
  output: {
    path: 'example/dist/',
    filename: 'bundle.min.js',
    publicPath: '/dist/'
  },
  resolve: {
    root: [
      path.join(__dirname, 'example/')
    ],
    extensions: ['', '.js'],
    alias: {}
  },
  module: {
    noParse: [],
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/, /build/] }
    ]
  },
  plugin: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};

console.log('\x1b[33mopen http://localhost:8080/example/ to see example \x1b[0m');

module.exports = config;
