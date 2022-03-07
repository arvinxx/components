import { act, renderHook } from '@testing-library/react-hooks';
import { useCollapseList, useUnfoldedList } from './globalStore';

describe('useCollapseList', () => {
  it('初始值', () => {
    const { result } = renderHook(() => useCollapseList());
    expect(result.current.list).toEqual([]);
  });

  it('添加元素', () => {
    const { result } = renderHook(() => useCollapseList());
    act(() => {
      result.current.toggleItem('123');
    });

    expect(result.current.list).toEqual(['123']);

    act(() => {
      result.current.toggleItem('12');
    });

    expect(result.current.list).toEqual(['123', '12']);
  });

  it('切换元素', () => {
    const { result } = renderHook(() => useCollapseList());
    act(() => {
      result.current.toggleItem('xxx');
      result.current.toggleItem('xxx');
    });

    expect(result.current.list).toEqual([]);
  });
});

describe('useUnfoldedList', () => {
  it('添加元素', () => {
    const { result } = renderHook(() => useUnfoldedList());
    act(() => {
      result.current.toggleItem('123');
    });

    expect(result.current.list).toEqual(['123']);
  });

  it('切换元素', () => {
    const { result } = renderHook(() => useUnfoldedList());

    act(() => {
      result.current.toggleItem('xxx');
    });

    expect(result.current.list).toEqual(['xxx']);

    act(() => {
      result.current.toggleItem('xxx');
    });

    expect(result.current.list).toEqual([]);
  });
});
