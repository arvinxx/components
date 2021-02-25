module.exports = {
  entry: 'src/index.ts',
  cjs: 'babel',
  esm: 'babel',
  lessInBabelMode: true,
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
};
