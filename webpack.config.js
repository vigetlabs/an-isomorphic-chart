var Path = require('path');

module.exports = {
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
        loader  : 'envify-loader'
      },
      {
        test    : /\.jsx*$/,
        loader  : 'jsx-loader',
        query   : { harmony: true }
      },
      {
        test    : /\.json$/, loader  : 'json-loader'
      }
    ]
  }
};
