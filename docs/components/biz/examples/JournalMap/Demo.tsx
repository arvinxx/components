/**
 * compact: true
 */
import React from 'react';
import JournalMap from '@arvinxu/journal-map';

import { data } from './data';

const Demo = () => {
  return (
    <div style={{ background: '#fafafa', padding: 24 }}>
      <JournalMap data={data} style={{ background: 'white', padding: 24 }} />
    </div>
  );
};

export default Demo;
