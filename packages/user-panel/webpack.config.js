const path = require('path');
const config = require('../../webpack.config');

module.exports = {
  ...config,
  entry: {
    index: './src/index.ts',
    'index.min': './src/index.ts',
  },

  output: {
    ...config.output,
    library: 'UserPanel',
    path: path.resolve(__dirname, 'dist'),
  },
};
