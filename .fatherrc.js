module.exports = {
  entry: 'src/index.ts',
  cjs: 'babel',
  esm: 'babel',
  target: 'node',
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
};
