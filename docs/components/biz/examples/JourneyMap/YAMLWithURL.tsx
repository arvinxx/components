/**
 * compact: true
 */
import React from 'react';
import JourneyMap from '@arvinxu/journey-map';

const YAMLWithURL = () => {
  return (
    <JourneyMap
      data="https://gw.alipayobjects.com/os/antfincdn/gqpXwG8AFl/map.yml"
      style={{ padding: 24 }}
    />
  );
};

export default YAMLWithURL;
