const base = require('../../.fatherrc');

module.exports = {
  ...base,
  lessInBabelMode: false,
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
};
