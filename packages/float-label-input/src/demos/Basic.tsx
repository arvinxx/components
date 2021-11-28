import React, { useState } from 'react';

import FloatLabelInput from '@arvinxu/float-label-input';

const Basic = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <FloatLabelInput label={'名称'} value={value} onChange={setValue} />
      <FloatLabelInput label={'地址'} value={value} onChange={setValue} />
      <FloatLabelInput
        label={'地址'}
        value={value}
        onChange={setValue}
        required
      />
    </div>
  );
};

export default Basic;
