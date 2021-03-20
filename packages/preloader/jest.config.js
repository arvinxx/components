const base = require('../../jest.config.base');

const packageName = '@arvinxu/preloader';

const root = '<rootDir>/packages/preloader';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
