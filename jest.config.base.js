const {
  default: umiConfig,
} = require('@umijs/test/lib/createDefaultConfig/createDefaultConfig');

const defaultConfig = umiConfig(process.cwd(), {});

const path = require('path');

module.exports = {
  ...defaultConfig,
  setupFiles: [...defaultConfig.setupFiles],
  moduleNameMapper: {
    '@arvinxu/float-label-input': '<rootDir>/packages/float-label-input/src',
    '@arvinxu/page-loading': '<rootDir>/packages/page-loading/src',
  },
  rootDir: path.resolve(__dirname, '.'),
};
