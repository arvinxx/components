import React from 'react';
import { render } from '@testing-library/react';

import { Flexbox } from '@arvinxu/layout-kit';

describe('Flexbox', () => {
  it('gap', () => {
    const { container } = render(
      <Flexbox gap={2}>
        <div>1</div>
        <div>2</div>
      </Flexbox>,
    );
    expect(container).toMatchSnapshot();
  });
});
