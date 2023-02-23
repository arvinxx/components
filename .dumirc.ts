import { defineConfig } from 'dumi';
import path from 'path';

const basicComponents = [
  'preloader',
  'layout-kit',
  'macos-traffic-light',
  'page-loading',
  'sortable-list',
  'color-picker',
];

const bizComponents = [
  'asset-gallery',
  'journey-map',
  'heatmap-calendar',
  'mindflow',
  'user-panel',
];

const alias = Object.fromEntries(
  [...basicComponents, ...bizComponents].map((name) => [
    `@arvinxu/${name}`,
    path.join(__dirname, `./packages/${name}/src`),
  ]),
);

export default defineConfig({
  themeConfig: {
    name: '空谷的组件库',
    logo: 'https://gw.alipayobjects.com/zos/antfincdn/mj85r7V5aX/konggu.svg',
    github: 'https://github.com/arvinxx/components',
  },
  resolve: {
    atomDirs: [
      ...basicComponents.map((c) => ({
        type: 'component',
        dir: `packages/${c}/src`,
      })),
      ...bizComponents.map((c) => ({
        type: 'biz-component',
        dir: `packages/${c}/src`,
      })),
    ],
  },

  alias,

  monorepoRedirect: {},
});
