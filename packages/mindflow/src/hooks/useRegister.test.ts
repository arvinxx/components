import { renderHook } from '@testing-library/react-hooks';
import { useGraphRegister } from './useRegister';

describe('useGraphRegister', () => {
  it('初始值', () => {
    renderHook(() => useGraphRegister());
    expect(window.__IS_REGISTERED_MIND_NODE__).toBeTruthy();
  });
});
