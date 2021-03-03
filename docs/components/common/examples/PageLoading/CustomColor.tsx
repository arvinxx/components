import React, { useState } from 'react';
import { Radio } from 'antd';

import PageLoading from '@arvinxu/page-loading';

const { Group } = Radio;
const CustomColor = () => {
  const [color, setColor] = useState('none');
  return (
    <div>
      <Group
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      >
        <Radio value={'none'}>默认</Radio>
        <Radio value={'red'} style={{ color: 'red' }}>
          红色
        </Radio>
        <Radio value={'green'} style={{ color: 'green' }}>
          绿色
        </Radio>
        <Radio value={'purple'} style={{ color: 'purple' }}>
          紫色
        </Radio>
      </Group>

      <div style={{ height: 300, marginTop: 24 }}>
        <PageLoading
          id={'custom-color'}
          color={color !== 'none' ? color : undefined}
        />
      </div>
    </div>
  );
};

export default CustomColor;
