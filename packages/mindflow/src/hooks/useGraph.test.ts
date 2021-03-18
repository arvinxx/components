import { renderHook } from '@testing-library/react-hooks';
import { useGraph } from './useGraph';

describe('useGraph', () => {
  it('初始值', () => {
    const { result } = renderHook(() => useGraph([]));
    expect(result.current.container.current).toBeUndefined();
  });
});
