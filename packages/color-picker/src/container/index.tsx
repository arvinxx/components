import React from 'react';
import type { FC } from 'react';
import type { ColorPickerProps } from '../types';

import App from './App';
import StoreUpdater from './StoreUpdater';
import { createStore, Provider } from '../store';

const ColorPicker: FC<ColorPickerProps> = (props) => {
  const { presetColors, color, onSwatchHover, onChange, onChangeComplete } = props;

  return (
    <Provider createStore={createStore}>
      <App {...props} />
      <StoreUpdater
        color={color}
        presetColors={presetColors}
        onChange={onChange}
        onChangeComplete={onChangeComplete}
        onSwatchHover={onSwatchHover}
      />
    </Provider>
  );
};

export default ColorPicker;
