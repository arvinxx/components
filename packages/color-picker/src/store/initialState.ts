import chroma from 'chroma-js';
import type { ColorPickerState } from '../types';

const initialState: ColorPickerState = {
  colorMode: 'hsv',
  presetColors: [
    '#D0021B',
    '#F5A623',
    '#F8E71C',
    '#8B572A',
    '#7ED321',
    '#417505',
    '#BD10E0',
    '#9013FE',
    '#4A90E2',
    '#50E3C2',
    '#B8E986',
    '#000000',
    '#4A4A4A',
    '#9B9B9B',
    '#FFFFFF',
  ],
  colorModel: chroma('#22194D'),
  // 由于在 chroma 中，saturation 为 0 时，hue 会自动改成 NaN
  // 这会破坏基础的预期
  // 取色器中
  hue: 250,
  brightness: 30,
  saturation: 68,
};

export default initialState;
