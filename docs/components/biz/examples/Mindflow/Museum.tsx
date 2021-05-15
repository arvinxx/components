import React from 'react';
import Mindflow from '@arvinxu/mindflow';
import * as datasource from './data';

const Museum = () => {
  return <Mindflow value={datasource.museum} height={600} />;
};

export default Museum;
