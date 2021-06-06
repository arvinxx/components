const base = require('../../jest.config.base');

const packageName = '@arvinxu/utils';

const root = '<rootDir>/packages/utils';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
