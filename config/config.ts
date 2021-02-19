import { defineConfig } from 'umi';

export default defineConfig({
  title: 'monorepo-template',
  mode: 'site',
  // 部署在非根目录时, base 和 publicPath 都需要配置
  base: '/',
  publicPath: '/',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  navs: [
    { title: '指南', path: '/guide' },
    {
      title: 'GitHub',
      path: 'https://github.com/arvinxx/monorepo-template',
    },
  ],
  dynamicImport: {
    loading: '@ant-design/pro-skeleton',
  },
});
