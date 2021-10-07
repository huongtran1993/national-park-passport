const path = require('path');

module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,
  output: {
    path: path.resolve(__dirname, 'client/dist/bundles'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: 'babel-loader' }],
  },
  mode: 'development',
  resolve: { extensions: ['', '.jsx', '.js'] },
};
