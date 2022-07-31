import React from 'react';
import type { FC } from 'react';
import type { ColorPickerProps } from '../types';

import Sketch from './Sketch';
import { createStore, Provider } from '../store';

const SketchPicker: FC<ColorPickerProps> = (props) => (
  <Provider createStore={createStore}>
    <Sketch {...props} />
  </Provider>
);

export default SketchPicker;
