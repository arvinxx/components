import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import FloatLabelInput from '@arvinxu/float-label-input';

describe('FloatLabelInput', () => {
  it('正常渲染', () => {
    const { container } = render(<FloatLabelInput label={'test'} />);
    expect(container).toMatchSnapshot();
  });

  it('受控组件', () => {
    // const { container } = render(<FloatLabelInput label={'test'} />);
  });

  it('focus 向上移动; blur 返回', () => {
    const { queryByTestId } = render(<FloatLabelInput label={'test'} />);

    const input = queryByTestId('input');
    const label = queryByTestId('label');

    expect(label.style.transform).toBe('');
    fireEvent.focus(input);
    expect(label.style.transform).toBe('translateY(-28px)');
    fireEvent.blur(input);
    expect(label.style.transform).toBe('');
  });

  it('可输入外部高度', () => {
    // const { queryByTestId } = render(
    //   <FloatLabelInput label={'test'} style={{ height: 40 }} />,
    // );
    // const input = queryByTestId('input');
    // fireEvent.focus(input);
    // const label = queryByTestId('label');
    // debug(label);
    // expect(label.style.transform).toBe('translateY(-32px)');
  });
});
