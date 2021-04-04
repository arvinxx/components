/**
 * compact: true
 */
import React from 'react';
import JournalMap from '@arvinxu/journal-map';

import { customColor } from './data';

const CustomColor = () => {
  return (
    <div
      style={{
        background: '#fafafa',
        padding: 24,
      }}
    >
      <JournalMap
        data={customColor}
        style={{ background: 'white', padding: 24 }}
      />
    </div>
  );
};

export default CustomColor;
