import React from 'react';
import { render } from '@testing-library/react';

import Reference from './Reference';

describe('Reference', () => {
  it('空档案', () => {
    const { container } = render(
      <Reference references={[]} setVisible={() => {}} />,
    );
    expect(container).toMatchSnapshot();
  });
  it('列表', () => {
    const { container } = render(
      <Reference
        references={[
          { id: '1', title: 'node1', type: 'rebuttal' },
          { id: '2', title: 'node2', url: 'https://url' },
          { id: '3', title: 'node3', type: 'backing' },
          { id: '4', title: 'node4', type: 'ground' },
          { id: '5', title: 'node5', type: 'warrant' },
        ]}
        setVisible={() => {}}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('点击关闭', async () => {
    const onClick = jest.fn();
    const { findByText } = render(
      <Reference references={[]} setVisible={onClick} />,
    );
    const btn = await findByText('关 闭');

    btn.click();

    expect(onClick).toBeCalledTimes(1);
  });
});
