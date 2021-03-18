import { rgba2hex } from './color';

describe('rgba2hex', () => {
  it('返回灰色', () => {
    expect(rgba2hex([0, 0, 0, 0.15])).toEqual('#d8d8d8');
  });
});
