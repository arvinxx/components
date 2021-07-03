const base = require('../../jest.config.base');

const packageName = '@arvinxu/i18n';

const root = '<rootDir>/packages/i18n';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
