const path = require('path');
const config = require('../../webpack.config');

module.exports = {
  ...config,
  output: {
    ...config.output,
    library: 'LayoutToolkit',
    path: path.resolve(__dirname, 'dist'),
  },
};
