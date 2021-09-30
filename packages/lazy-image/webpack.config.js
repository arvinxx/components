const path = require('path');
const config = require('../../webpack.config');

module.exports = {
  ...config,
  output: {
    ...config.output,
    library: 'LazyImage',
    path: path.resolve(__dirname, 'dist'),
  },
};
