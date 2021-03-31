const base = require('../../jest.config.base');

const packageName = '@arvinxu/journal-map';

const root = '<rootDir>/packages/journal-map';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
