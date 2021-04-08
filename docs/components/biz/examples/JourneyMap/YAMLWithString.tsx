/**
 * compact: true
 */
import React from 'react';
import JourneyMap from '@arvinxu/journey-map';
import { data } from './yml';

const YAML = () => {
  return <JourneyMap data={data} style={{ padding: 24 }} />;
};

export default YAML;
