const base = require('../../jest.config.base');

const packageName = '@arvinxu/lazy-image';

const root = '<rootDir>/packages/lazy-image';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
