import { act, renderHook } from '@testing-library/react-hooks';

import { createStore } from './index';

const useStore = createStore();
describe('useStore', () => {
  it('默认值', () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.data).toEqual([]);
  });

  describe('添加item', () => {
    it('基础添加', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.addItem({ id: '333' });
      });

      expect(result.current.data).toEqual([{ id: '333' }]);
    });

    it('携带索引的添加', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.internalUpdateData([
          { id: '1' },
          { id: '2' },
          { id: '3' },
        ]);

        result.current.addItem({ id: '4' }, 0);
      });

      expect(result.current.data).toEqual([
        { id: '4' },
        { id: '1' },
        { id: '2' },
        { id: '3' },
      ]);
    });
  });
  it('删除item', () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.internalUpdateData([
        { id: '1' },
        { id: '2' },
        { id: '3' },
      ]);
      result.current.removeItem('2');
    });

    expect(result.current.data).toEqual([{ id: '1' }, { id: '3' }]);
  });
  it('重排序item', () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.internalUpdateData([
        { id: '1' },
        { id: '2' },
        { id: '3' },
      ]);
      result.current.reorder(2, 0);
    });

    expect(result.current.data).toEqual([
      { id: '3' },
      { id: '1' },
      { id: '2' },
    ]);
  });

  it('激活/取消激活 item', () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.activeId).toBeNull();

    // 设置
    act(() => {
      result.current.internalUpdateData([
        { id: '1' },
        { id: '2' },
        { id: '3' },
      ]);
    });
    // 激活
    act(() => {
      result.current.activateItem('2');
    });
    expect(result.current.activeId).toEqual('2');

    //  取消激活

    act(() => {
      result.current.deactivateItem();
    });
    expect(result.current.activeId).toEqual(null);
  });
});
