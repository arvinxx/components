const base = require('../../.fatherrc');

module.exports = {
  ...base,
  extraBabelPlugins: [
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
      'antd',
    ],
  ],
};
