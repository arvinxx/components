import baseConfig from './jest.config.base';
import { Config } from '@umijs/test';

const config: Config.InitialOptions = {
  ...baseConfig,
  projects: ['<rootDir>/packages/*/jest.config.ts'],
  moduleDirectories: ['node_modules'],
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.ts',
    '<rootDir>/packages/*/src/**/*.tsx',
  ],
  coverageDirectory: '<rootDir>/coverage/',
};

export default config;
