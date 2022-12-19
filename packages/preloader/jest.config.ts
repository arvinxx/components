import base from '../../jest.config.base';
import { Config } from '@umijs/test';

const packageName = '@arvinxu/preloader';

const root = '<rootDir>/packages/preloader';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
  collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};

export default config;
