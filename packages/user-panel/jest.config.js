const base = require('../../jest.config.base');

const packageName = '@arvinxu/user-panel';

const root = '<rootDir>/packages/user-panel';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
  setupFiles: [...base.setupFiles, `${root}/tests/setup.ts`],
};
