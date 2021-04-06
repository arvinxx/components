/**
 * compact: true
 */
import React from 'react';
import JournalMap from '@arvinxu/journal-map';

const YAML = () => {
  return (
    <div style={{ background: '#fafafa', padding: 24 }}>
      <JournalMap
        data="https://gw.alipayobjects.com/os/antfincdn/4pyctfdZvf/data.yml"
        style={{ background: 'white', padding: 24 }}
      />
    </div>
  );
};

export default YAML;
