import { defineConfig } from 'umi';

export default defineConfig({
  title: '@arvinxu/components',
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
