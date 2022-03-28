const { default: umiConfig } = require('@umijs/test/lib/createDefaultConfig/createDefaultConfig');

const defaultConfig = umiConfig(process.cwd(), {});

const path = require('path');

module.exports = {
  ...defaultConfig,
  setupFiles: [
    ...defaultConfig.setupFiles,
    // 为了解决 @antv/g2 等 npm 包使用 worker 造成的 Worker is not defined 报错
    // 添加  jsdom-worker 作为 jsdom 环境下 worker 的 polyfill ref: https://www.npmjs.com/package/jsdom-worker
    'jsdom-worker',
    './tests/setup.ts',
  ],
  moduleNameMapper: {
    '@arvinxu/asset-gallery': '<rootDir>/packages/asset-gallery/src',
    '@arvinxu/preloader': '<rootDir>/packages/preloader/src',
    '@arvinxu/macos-traffic-light': '<rootDir>/packages/macos-traffic-light/src',
    '@arvinxu/journey-map': '<rootDir>/packages/journey-map/src',
    '@arvinxu/user-panel': '<rootDir>/packages/user-panel/src',
    '@arvinxu/heatmap-calendar': '<rootDir>/packages/heatmap-calendar/src',
    '@arvinxu/utils': '<rootDir>/packages/utils/src',
    '@arvinxu/i18n': '<rootDir>/packages/i18n/src',
    '@arvinxu/layout-kit': '<rootDir>/packages/layout-kit/src',
    '@arvinxu/sortable-list': '<rootDir>/packages/sortable-list/src',
    '@arvinxu/color-picker': '<rootDir>/packages/color-picker/src',
    '@arvinxu/float-label-input': '<rootDir>/packages/float-label-input/src',
    '@arvinxu/page-loading': '<rootDir>/packages/page-loading/src',
    '@arvinxu/mindflow': '<rootDir>/packages/mindflow/src',
    '@arvinxu/tag-selector': '<rootDir>/packages/tag-selector/src',
  },
  rootDir: path.resolve(__dirname, '.'),
};
