import React, { useState } from 'react';
import { Radio } from 'antd';

import Mindflow from '@arvinxu/mindflow';
import * as datasource from './data';

const { Group } = Radio;

const MindflowDemo = () => {
  const [type, setType] = useState<'demo' | 'museum'>('demo');

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginRight: 8 }}>切换案例数据:</span>
        <Group
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <Radio value={'demo'}>demo</Radio>
          <Radio value={'museum'}>博物馆案例</Radio>
        </Group>
      </div>
      <Mindflow data={datasource[type]} height={600} />
    </div>
  );
};

export default MindflowDemo;
