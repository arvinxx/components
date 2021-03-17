import { useMindflowService } from './useMindflowContext';
import { act, renderHook } from '@testing-library/react-hooks';

describe('useMindflowContext', () => {
  it('初始值', () => {
    const { result } = renderHook(() => {
      return useMindflowService();
    });
    expect(result.current.collapseList).toEqual([]);
  });

  it('添加元素', () => {
    const { result } = renderHook(() => {
      return useMindflowService();
    });
    act(() => {
      result.current.toggleNodeCollapsed('123');
    });

    expect(result.current.collapseList).toEqual(['123']);
  });
  it('切换元素', () => {
    const { result } = renderHook(() => {
      return useMindflowService();
    });
    act(() => {
      result.current.toggleNodeCollapsed('123');
      result.current.toggleNodeCollapsed('123');
    });

    expect(result.current.collapseList).toEqual([]);
  });
});
