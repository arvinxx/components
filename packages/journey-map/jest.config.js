const base = require('../../jest.config.base');

const packageName = '@arvinxu/journey-map';

const root = '<rootDir>/packages/journey-map';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
