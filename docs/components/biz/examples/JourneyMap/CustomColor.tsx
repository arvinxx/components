/**
 * compact: true
 */
import React from 'react';
import JourneyMap from '@arvinxu/journey-map';

import { customColor } from './customColor';

const CustomColor = () => {
  return (
    <div style={{ background: '#fafafa', padding: 24 }}>
      <JourneyMap
        data={customColor}
        style={{ background: 'white', padding: 24 }}
      />
    </div>
  );
};

export default CustomColor;
