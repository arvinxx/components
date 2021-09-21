import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TrafficLight from '@arvinxu/macos-traffic-light';

describe('TrafficLight', () => {
  it('默认状态', () => {
    const { container } = render(<TrafficLight />);
    expect(container).toMatchSnapshot();
  });

  it('hover显示 icon', () => {
    const { queryByTestId } = render(<TrafficLight />);

    const ctn = queryByTestId('container');

    expect(queryByTestId('close-icon')).toBeNull();

    fireEvent.mouseEnter(ctn);
    expect(queryByTestId('close-icon')).not.toBeNull();

    fireEvent.mouseLeave(ctn);
    expect(queryByTestId('close-icon')).toBeNull();
  });

  it('关闭最大化和最小化', () => {
    const { queryByTestId } = render(
      <TrafficLight maximizable={false} minimizable={false} />,
    );
    const ctn = queryByTestId('container');

    fireEvent.mouseEnter(ctn);

    expect(queryByTestId('close-icon')).not.toBeNull();
    expect(queryByTestId('onMaximize')).toBeNull();
    expect(queryByTestId('onMinimize')).toBeNull();
  });

  it('测试最大化方法', () => {
    const maximize = jest.fn();
    const { queryByTestId } = render(<TrafficLight onMaximize={maximize} />);
    const maxEl = queryByTestId('onMaximize');
    userEvent.click(maxEl);
    expect(maximize).toBeCalledTimes(1);
  });

  it('测试禁用最大化方法', () => {
    const maximize = jest.fn();
    const { queryByTestId } = render(
      <TrafficLight disableMaximize onMaximize={maximize} />,
    );
    const maxEl = queryByTestId('onMaximize');
    userEvent.click(maxEl);
    expect(maximize).toBeCalledTimes(0);
  });
});
