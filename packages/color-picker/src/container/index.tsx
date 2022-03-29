import React from 'react';
import type { FC } from 'react';
import type { ColorPickerProps } from '../types';

import Sketch from './Sketch';
import Wrapper from './Provider';

const SketchPicker: FC<ColorPickerProps> = (props) => (
  <Wrapper>
    <Sketch {...props} />
  </Wrapper>
);

export default SketchPicker;
