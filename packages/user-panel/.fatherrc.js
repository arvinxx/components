module.exports = {
  entry: 'src/index.ts',
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  cjs: 'babel',
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
  pkgs: ['@arvinxu/i18n'],
};
