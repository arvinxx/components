import React from 'react';
import Mindflow from '@arvinxu/mindflow';
import { demo } from './data';

const MindflowDemo = () => {
  return (
    <div>
      <Mindflow data={demo} height={600} />
    </div>
  );
};

export default MindflowDemo;
