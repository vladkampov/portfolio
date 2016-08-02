var path = require("path");
var LessPluginCleanCSS = require('less-plugin-clean-css');

module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app/bundle',
    filename: 'bundle.js',
    publicPath: 'app/bundles/'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.less$/, loaders: ["style", "css", "less?config=lessLoader&strictMath"]},
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  lessLoader: {
    lessPlugins: [
      new LessPluginCleanCSS({advanced: true})
    ]
  },
  resolve: {
    //tells webpack where to look for modules
    modulesDirectories: ['node_modules'],
    //extensions that should be used to resolve modules
    extensions: ['', '.js', '.jsx', '.css', '.svg', '.ttf', '.woff', '.woff2', '.eot']
  }
};
