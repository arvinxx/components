import React from 'react';
import { render } from '@testing-library/react';

import CollapseIcon from './index';

describe('CollapseIcon', () => {
  it('正常渲染', () => {
    const { container } = render(
      <CollapseIcon color={'red'} id={'123'} collapsed={false} />,
    );
    expect(container).toMatchSnapshot();
  });
  it('折叠状态', () => {
    const { container } = render(
      <CollapseIcon color={'blue'} id={'123'} collapsed />,
    );
    expect(container).toMatchSnapshot();
  });
});
