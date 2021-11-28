const base = require('../../jest.config.base');

const packageName = '@arvinxu/layout-kit';

const root = '<rootDir>/packages/layout-kit';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
