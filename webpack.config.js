var path = require('path');
const webpack = require('webpack');
const DEBUG = true;
const STYLE_LOADER = 'style-loader';
const CSS_LOADER = DEBUG ? 'css-loader' : 'css-loader?minimize';
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
    preLoaders: [
        {
         test: /\.jsx?$/, 
         loader: 'eslint', exclude: /node_modules/ 
        }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          plugins: ['transform-decorators-legacy'],
          presets: DEBUG ? ['es2015', 'react', 'stage-0', 'react-hmre'] : ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: STYLE_LOADER +'!'+ CSS_LOADER +'!'+ 'postcss',
      },
      {
        test: /\.scss/,
        loader: STYLE_LOADER +'/useable'+'!'+ CSS_LOADER +'!'+ 'postcss!saas',
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
  plugins: DEBUG ? [
      new webpack.HotModuleReplacementPlugin(), 
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('development')}}),
      ] : [
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}}),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}, comments: false }),
      new webpack.optimize.AggressiveMergingPlugin()
    ]
}
