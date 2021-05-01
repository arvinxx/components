const base = require('../../jest.config.base');

const packageName = '@arvinxu/heatmap-calendar';

const root = '<rootDir>/packages/heatmap-calendar';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};
