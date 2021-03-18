const base = require('../../jest.config.base');

const packageName = '@arvinxu/mindflow';

const root = '<rootDir>/packages/mindflow';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
