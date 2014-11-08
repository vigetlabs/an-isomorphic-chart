var Path = require('path');

module.exports = {
  debug: true,
  devtool: 'sourcemap',

  entry: {
    bundle: './src/browser.jsx'
  },

  output: {
    path: Path.resolve(__dirname, 'assets'),
    filename: '[name].js',
    sourceMapFilename: '[name].map'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test    : /\.jsx*$/,
        exclude : /node_modules/,
        loader  : 'jsx-loader',
        query   : { harmony: true }
      },
      {
        test    : /\.json$/,
        exclude : /node_modules/,
        loader  : 'json-loader'
      }
    ]
  }
};
