const base = require('../../jest.config.base');

const packageName = '@arvinxu/float-label-input';

const root = '<rootDir>/packages/float-label-input';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
