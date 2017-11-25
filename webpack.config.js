var webpack = require('webpack')
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [
      new TsConfigPathsPlugin(),
    ]
  },

  module: {
    rules: [
      // Lint!
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          configFile: 'tslint.json'
        }
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.(scss|css|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'node-static',
      filename: 'node-static.js',
      minChunks (module, count) {
        var context = module.context
        return context && context.indexOf('node_modules') >= 0
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
}
