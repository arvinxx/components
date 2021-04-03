import React from 'react';
import { render, fireEvent } from '@testing-library/react';

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
  it('hover 时修改颜色', async () => {
    const { findByTestId } = render(
      <CollapseIcon color={'blue'} id={'123'} collapsed />,
    );
    const ctn = await findByTestId('icon')!;
    expect(ctn.style.background).toEqual('white');
    fireEvent.mouseOver(ctn);
    expect(ctn.style.background).toEqual('blue');
    fireEvent.mouseLeave(ctn);
    expect(ctn.style.background).toEqual('white');
  });
});
