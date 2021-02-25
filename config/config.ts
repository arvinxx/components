import { defineConfig } from 'umi';

export default defineConfig({
  title: '空谷的设计组件',
  mode: 'site',
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
  dynamicImport: {
    loading: '@ant-design/pro-skeleton',
  },
});
