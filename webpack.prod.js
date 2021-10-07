const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');//gzip
const BrotliPlugin = require('brotli-webpack-plugin'); //brotli

module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,
  plugins: [
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|jsx)$/,
      threshold: 8192,
      minRatio: 0.8,
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'client/dist/bundles'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: 'babel-loader' }],
  },
  mode: 'production',
  resolve: { extensions: ['', '.jsx', '.js'] },
};