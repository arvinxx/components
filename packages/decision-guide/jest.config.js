const base = require('../../jest.config.base');

const packageName = '@arvinxu/decision-guide';

const root = '<rootDir>/packages/decision-guide';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
