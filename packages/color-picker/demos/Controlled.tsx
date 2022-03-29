import React, { useState } from 'react';

import SketchPicker from '@arvinxu/color-picker';

const Demo = () => {
  const [x, setX] = useState();
  return (
    <SketchPicker
      color={x}
      onChange={(e) => {
        console.log(e);
        setX(e);
      }}
    />
  );
};

export default Demo;
