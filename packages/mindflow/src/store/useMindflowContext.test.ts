import { act, renderHook, cleanup } from '@testing-library/react-hooks';
import { useMindflowService } from './useMindflowContext';

describe('useMindflowContext', () => {
  beforeEach(() => {
    cleanup();
  });

  describe('toggleNodeCollapsed', () => {
    it('初始值', () => {
      const { result } = renderHook(() => useMindflowService());
      expect(result.current.collapseList).toEqual([]);
    });

    it('添加元素', () => {
      const { result } = renderHook(() => useMindflowService());
      act(() => {
        result.current.toggleNodeCollapsed('123');
      });

      expect(result.current.collapseList).toEqual(['123']);

      act(() => {
        result.current.toggleNodeCollapsed('123');
      });
    });
    // it('切换元素', () => {
    //   const { result } = renderHook(() => useMindflowService());
    //   act(() => {
    //     result.current.toggleNodeCollapsed('xxx');
    //     result.current.toggleNodeCollapsed('xxx');
    //   });
    //
    //   expect(result.current.collapseList).toEqual([]);
    // });
  });

  describe('toggleNodeUnfold', () => {
    it('添加元素', () => {
      const { result } = renderHook(() => useMindflowService());
      act(() => {
        result.current.toggleNodeUnfold('123');
      });

      expect(result.current.isNodeUnfolded('123')).toBeTruthy();

      act(() => {
        result.current.toggleNodeUnfold('123');
      });
    });

    it('切换元素', () => {
      const { result } = renderHook(() => useMindflowService());

      expect(result.current.isNodeUnfolded('123')).toBeFalsy();
    });
  });
});
