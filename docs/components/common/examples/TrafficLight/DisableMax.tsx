import React, { FC } from 'react';
import { Row, Col } from 'antd';

import TrafficLight from '@arvinxu/macos-traffic-light';

const DisableMaximize = () => {
  const Block: FC<{ title: string }> = ({ children, title }) => (
    <Row gutter={8} align={'middle'}>
      <Col>{title}</Col>
      <Col>{children}</Col>
    </Row>
  );
  const props = {
    close: () => {
      alert('Pressed closed');
    },
    minimize: () => {
      alert('Pressed minimize');
    },
    maximize: () => {
      alert('Pressed maximize');
    },
  };
  return (
    <div>
      <Block title={'禁用最大化:'}>
        <TrafficLight {...props} disableMaximize />
      </Block>
      <Block title={'移除最大化:'}>
        <TrafficLight {...props} showMaximize={false} />
      </Block>
      <Block title={'移除最小化:'}>
        <TrafficLight {...props} showMinimize={false} />
      </Block>
      <Block title={'移除最小与最大化:'}>
        <TrafficLight {...props} showMinimize={false} showMaximize={false} />
      </Block>
    </div>
  );
};

export default DisableMaximize;
