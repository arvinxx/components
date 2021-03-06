const path = require('path');
const config = require('../../webpack.config');

module.exports = {
  ...config,
  output: {
    ...config.output,
    library: 'Mindflow',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: [
    ...config.externals,
    {
      '@antv/x6': 'X6',
      '@antv/x6-react-shape': 'X6ReactShape',
      '@antv/layout': 'AntVLayout',
    },
  ],
};
