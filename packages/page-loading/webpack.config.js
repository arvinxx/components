const path = require('path');
const config = require('../../webpack.config');

const packageDir = path.resolve(__dirname, '..');

module.exports = {
  ...config,
  output: {
    ...config.output,
    library: 'PageLoading',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    ...config.resolve,
    alias: {
      '@arvinxu/preloader': path.resolve(packageDir, './preloader/src'),
    },
  },
};
