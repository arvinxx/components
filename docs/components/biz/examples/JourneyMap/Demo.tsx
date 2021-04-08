/**
 * compact: true
 */
import React from 'react';
import JourneyMap from '@arvinxu/journey-map';

import { data } from './data';

const Demo = () => {
  return (
    <JourneyMap
      data={data}
      title={'租车用户旅程地图'}
      style={{ padding: 24 }}
    />
  );
};

export default Demo;
