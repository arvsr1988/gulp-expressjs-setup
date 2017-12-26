const path = require('path');
const rootDir = path.resolve('./');
module.exports = {
  entry: {
    bundle: rootDir + '/js/main.js',
  },
  output: {
    filename: '[name].js',
    path: rootDir + '/public'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              ["env", {
              "targets": {
                "browsers": ["last 2 versions", "> 5%"]
              }
            }]
          ]
        }
      }
    },
    { test: /\.hbs/, loader: "handlebars-template-loader" },
    ]
  },
};
