/**
 * compact: true
 */
import React from 'react';
import JourneyMap from '@arvinxu/journey-map';

import { customColor } from './color';

const CustomColor = () => {
  return <JourneyMap data={customColor} style={{ padding: 24 }} />;
};

export default CustomColor;
