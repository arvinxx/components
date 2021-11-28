module.exports = {
  entry: 'src/index.ts',
  cjs: 'babel',
  esm: 'babel',
  extraBabelPlugins: [
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
      'antd',
    ],
    [
      'import',
      {
        libraryName: '@ant-design/charts',
        libraryDirectory: 'es',
      },
    ],
  ],
  pkgs: [
    'utils',
    'preloader',
    'page-loading',
    'asset-gallery',
    'float-label-input',
    'heatmap-calendar',
    'i18n',
    'journey-map',
    'macos-traffic-light',
    'mindflow',
    'tag-selector',
    'user-panel',
  ],
};
