module.exports = {
  entry: 'src/index.ts',
  cjs: 'babel',
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  lessInBabelMode: true,
  extraBabelPlugins: [
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
      'antd',
      {
        libraryName: '@ant-design/charts',
        libraryDirectory: 'lib',
      },
    ],
  ],
};
