const baseConfig = require('./jest.config.base');

module.exports = {
  ...baseConfig,
  projects: ['<rootDir>/packages/*/jest.config.ts'],
  moduleDirectories: ['node_modules'],
  collectCoverageFrom: ['<rootDir>/packages/*/src/**/*.ts'],
  coverageDirectory: '<rootDir>/coverage/',
};
