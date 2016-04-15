var path = require('path');
const webpack = require('webpack');
var DEBUG = true;
const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 20',
  'Firefox >= 24',
  'Explorer >= 8',
  'iOS >= 6',
  'Opera >= 12',
  'Safari >= 6'
];
module.exports = {
  entry: [
    path.resolve(__dirname, './src/main.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './', 'build'),
    publicPath: '/'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  devtool: DEBUG ? 'source-map': false,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets:['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss-loader',
      },
      {
        test: /\.scss/,
        loader: 'style!css!postcss-loader!sass',
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.(woff|woff2|eot|svg|ttf)$/,
        loader: 'url?limit=8192',
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  postcss: function() {
    return [
      require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
    ];
  },
}
