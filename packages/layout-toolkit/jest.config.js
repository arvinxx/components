const base = require('../../jest.config.base');

const packageName = '@arvinxu/layout-toolkit';

const root = '<rootDir>/packages/layout-toolkit';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
