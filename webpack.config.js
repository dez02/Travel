const path = require('path');

module.exports = {
	devtool: 'source-map',
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/'),
    filename: 'js/app.js',
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
<<<<<<< HEAD

    {

      test: /\.s?css$/,

      loaders: ['style-loader', 'css-loader', 'sass-loader'],

      include: path.join(__dirname, 'client/src')

     },
     {

      test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
          options: {
          name: 'image/[hash].[ext]',
        }
      }
    ],
  },
=======
    {
         test: /\.s?css$/,
         loaders: ['style-loader', 'css-loader', 'sass-loader'],
         include: path.join(__dirname, 'client/src')
     }

    ]
},
>>>>>>> fcdcf72e87250b3aea3f879dd73ffa7bee557950

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};
