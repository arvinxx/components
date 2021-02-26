const baseConfig = require('./jest.config.base');

module.exports = {
  ...baseConfig,
  projects: ['<rootDir>/packages/*/jest.config.js'],
  moduleDirectories: ['node_modules'],
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.ts',
    '<rootDir>/packages/*/src/**/*.tsx',
  ],
  coverageDirectory: '<rootDir>/coverage/',
};
