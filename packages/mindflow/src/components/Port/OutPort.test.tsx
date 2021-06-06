import React from 'react';
import { render } from '@testing-library/react';

import { OutPort } from './OutPort';

describe('OutPort', () => {
  it('默认', () => {
    const { container } = render(
      <OutPort collapsed={false} color={'red'} id={'123'} />,
    );
    expect(container).toMatchSnapshot();
  });
});
