import React from 'react';
import Mindflow from '@arvinxu/mindflow';

import * as datasource from './data';

const Thinking = () => {
  return <Mindflow data={datasource.thinking} height={600} />;
};

export default Thinking;
