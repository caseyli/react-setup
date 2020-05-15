const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    about: './src/about.js',
    contact: './src/contact.js',
    home: './src/home.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
  	rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }  
      }
  	]
  }
};
