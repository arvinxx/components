const base = require('../../jest.config.base');

const packageName = '@arvinxu/macos-traffic-light';

const root = '<rootDir>/packages/macos-traffic-light';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
