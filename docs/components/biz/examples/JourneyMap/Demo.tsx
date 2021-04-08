/**
 * compact: true
 */
import React from 'react';
import JourneyMap from '@arvinxu/journey-map';

import { data } from './data';

const Demo = () => {
  return (
    <div style={{ background: '#fafafa', padding: 24 }}>
      <JourneyMap data={data} style={{ background: 'white', padding: 24 }} />
    </div>
  );
};

export default Demo;
