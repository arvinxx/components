import { copyPng } from './utils';

describe('copyPng', () => {
  it('初始值', async () => {
    expect(typeof copyPng).toEqual('function');
  });
});
