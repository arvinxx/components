import React from 'react';

import Mindflow from '@arvinxu/mindflow';
import * as datasource from './data';

const MindflowDemo = () => {
  return <Mindflow data={datasource.demo} height={600} />;
};

export default MindflowDemo;
