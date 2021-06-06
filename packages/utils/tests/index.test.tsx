import React from 'react';
import { findByTestId, render } from '@testing-library/react';

import { createContextStore } from '@arvinxu/utils';

describe('createContextStore', () => {
  const useHook = () => {
    return { hello: 1 };
  };
  const ContextStore = createContextStore(useHook);

  it('默认状态', async () => {
    const value = useHook();

    const { container } = render(
      <ContextStore.Provider value={value}>
        <div data-testid="test">{value.hello}</div>
      </ContextStore.Provider>,
    );
    const div = await findByTestId(container, 'test');

    expect(div.innerHTML).toEqual('1');
  });
});
