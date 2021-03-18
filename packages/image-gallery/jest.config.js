const base = require('../../jest.config.base');

const packageName = '@arvinxu/image-gallery';

const root = '<rootDir>/packages/image-gallery';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
