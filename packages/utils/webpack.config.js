const path = require('path');
const config = require('../../webpack.config');

module.exports = {
  ...config,
  output: {
    ...config.output,
    library: 'Utils',
    path: path.resolve(__dirname, 'dist'),
  },
};
