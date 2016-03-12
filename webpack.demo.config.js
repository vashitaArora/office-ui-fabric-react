'use strict';

let webpack = require('webpack');
let path = require('path');
let WebpackNotifierPlugin = require('webpack-notifier');
var SplitByPathPlugin = require('webpack-split-by-path');

// Create an array of configs, prepopulated with a debug (non-minified) build.
let configs = [
  createConfig(false)
];

// Create a production config if applicable.
if (process.argv.indexOf('--production') > -1) {
  configs.push(createConfig(true));
}

// Helper to create the config.
function createConfig(isProduction) {
  let minFileNamePart = isProduction ? '.min' : '';
  let webpackConfig = {
    context: path.join(__dirname, '/lib'),

    entry: {
      'demo-app': './demo/index.js'
    },

    output: {
      path: path.join(__dirname, '/dist'),
      filename: `[name]${ minFileNamePart }.js`,
      chunkFilename: `[name]${ minFileNamePart }.js`
    },

    devtool: 'source-map',

    devServer: {
      stats: 'none'
    },

    externals: [
      {
        'react': 'React'
      },
      {
        'react-dom': 'ReactDOM'
      },
    ],

    module: {
      loaders: [
      ]
    },

    plugins: [
      new SplitByPathPlugin([
        {
          name: 'demo-vendor',
          path: path.join(__dirname, 'node_modules'),
        },
        {
          name: 'demo-components',
          path: path.join(__dirname, 'lib', 'components')
        }
      ]),
      new WebpackNotifierPlugin()
    ]
  };

  if (isProduction) {
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }));
  }

  return webpackConfig;
}

module.exports = configs;