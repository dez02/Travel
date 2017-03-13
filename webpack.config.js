const path = require('path');

module.exports = {
	devtool: 'source-map',
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  module: {
    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader',
      query: {
        presets: ["react", "es2015"]
      }
    },
    {
         test: /\.s?css$/,
         loaders: ['style-loader', 'css-loader', 'sass-loader'],
         include: path.join(__dirname, 'client/src')
     }

    ],
  }

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes

};
