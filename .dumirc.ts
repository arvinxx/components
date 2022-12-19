import { defineConfig } from 'dumi';
import { menus } from './config/menu';

const basicComponents = [
  'preloader',
  'layout-kit',
  'macos-traffic-light',
  'page-loading',
  'sortable-list',
  'color-picker',
].map((c) => ({
  type: 'component',
  dir: `packages/${c}/src`,
}));

const bizComponents = [
  'asset-gallery',
  'journey-map',
  'heatmap-calendar',
  'mindflow',
  'user-panel',
].map((c) => ({
  type: 'biz-component',
  dir: `packages/${c}/src`,
}));

export default defineConfig({
  themeConfig: {
    name: '空谷的组件库',
    logo: 'https://gw.alipayobjects.com/zos/antfincdn/mj85r7V5aX/konggu.svg',
    // sideBar: menus,
  },
  theme: {
    '@c-primary': '#6CB7C7',
  },
  resolve: {
    atomDirs: [...basicComponents, ...bizComponents],
  },
});
