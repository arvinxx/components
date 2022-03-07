import { act, renderHook } from '@testing-library/react-hooks';
import { useFolded } from './useFolded';

describe('useFolded', () => {
  it('切换折叠状态', () => {
    const { result } = renderHook(() => useFolded('123', { title: '1' }));
    expect(result.current.isUnFolded).toBeFalsy();

    act(() => {
      result.current.toggleNodeUnfold('123');
    });

    expect(result.current.isUnFolded).toBeTruthy();
  });
  it('切换折叠状态', () => {
    const { result } = renderHook(() => useFolded('1', { title: '1' }));
    expect(result.current.isUnFolded).toBeFalsy();

    act(() => {
      result.current.toggleNodeUnfold('123');
    });

    expect(result.current.isUnFolded).toBeFalsy();
  });

  describe('是否可折叠', () => {
    it('只有标题时不可折叠', () => {
      const { result } = renderHook(() => useFolded('123', { title: '1' }));

      expect(result.current.cantFold).toBeFalsy();
    });
  });
  it('包含描述信息的对象可折叠', () => {
    const { result } = renderHook(() =>
      useFolded('123', { title: '1', description: '123' }),
    );

    expect(result.current.cantFold).toBeTruthy();
  });
  it('包含参考信息的对象可折叠', () => {
    const { result } = renderHook(() =>
      useFolded('123', { title: '1', references: [{ title: '123' }] }),
    );

    expect(result.current.cantFold).toBeTruthy();
  });
});
