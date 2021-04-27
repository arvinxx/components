import { copyPngFromSvg } from './png';

describe('copyPng', () => {
  it('初始值', async () => {
    expect(typeof copyPngFromSvg).toEqual('function');
  });
});
