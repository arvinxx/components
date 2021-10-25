import { defineConfig } from 'umi';

export default defineConfig({
  title: '空谷的组件库',
  mode: 'site',
  logo: 'https://gw.alipayobjects.com/zos/antfincdn/mj85r7V5aX/konggu.svg',
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
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/arvinxx/components',
    },
  ],
  theme: {
    '@c-primary': '#6CB7C7',
  },
  dynamicImport: {
    loading: '@ant-design/pro-skeleton',
  },
  mfsu: {},
});
