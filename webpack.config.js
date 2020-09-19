const webpack = require('webpack')

module.exports = {
  mode: process.env.ELEVENTY_ENV || 'development',
  entry: {
    app: __dirname + '/src/js/index.js',
  },
  output: {
    path: __dirname + '/_site/js/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      projectVersion: JSON.stringify(require('./package.json').version)
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
