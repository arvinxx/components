const path = require('path');
const config = require('../../webpack.config');

module.exports = {
  ...config,
  output: {
    ...config.output,
    library: 'JourneyMap',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: [...config.externals, { '@ant-design/charts': 'charts' }],
};
