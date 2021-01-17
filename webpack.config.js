/* eslint-disable global-require */

const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    app: `${__dirname}/src/js/index.js`,
  },
  output: {
    path: `${__dirname}/_site/js/`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new webpack.DefinePlugin({
      projectVersion: JSON.stringify(require('./package.json').version),
    }),
  ],
};
