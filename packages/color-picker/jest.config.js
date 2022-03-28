const base = require('../../jest.config.base');

const packageName = '@arvinxu/color-picker';

const root = '<rootDir>/packages/color-picker';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
