const base = require('../../jest.config.base');

const packageName = '@arvinxu/asset-gallery';

const root = '<rootDir>/packages/asset-gallery';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
