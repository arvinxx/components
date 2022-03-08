import { getIndexOfActiveItem } from './utils';

const list = [{ id: '123' }, { id: '3245' }];

describe('getIndexOfActiveItem', () => {
  it('找到 index', () => {
    const index = getIndexOfActiveItem(list, '123');
    expect(index).toEqual(0);
  });
  it('没找到 index', () => {
    const index = getIndexOfActiveItem(list, '135');

    expect(index).toEqual(-1);
  });
});
