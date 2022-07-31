import type { ChangeEvent } from 'react';
import type { HSLColor, RGBColor } from './swatch';
import type { Color as ColorModel } from 'chroma-js';

export type ColorMode = 'rgb' | 'hsl' | 'hsv';

export type Color = string | HSLColor | RGBColor;

export interface ColorResult {
  hex: string;
  hsl: HSLColor;
  rgb: RGBColor;
  source?: string;
}
export type ColorChangeHandler = (color: ColorResult, event: ChangeEvent<HTMLInputElement>) => void;

type OnColorChange = ({ hex, color }: { hex: string; color: ColorModel }) => void;

export interface ColorPickerState {
  // 外部预设值
  presetColors: string[];
  // 回调方法
  onSwatchHover?: OnColorChange;
  onChange?: OnColorChange;

  colorModel: ColorModel;
  colorMode: ColorMode;

  hue: number;
  saturation: number;
  brightness: number;
}

interface ColorPickerAction {
  internalUpdateColor: (color: ColorModel) => void;
  updateAlpha: (a: number) => void;
  updateHue: (hue: number) => void;
  updateColorMode: (mode: ColorMode) => void;
  updateByColorSpace: (key: string, value: number) => void;
  updateByHex: (hex: string) => void;
  updateBySV: (saturation: number, value: number) => void;
  updateByRgb: (rgb: RGBColor) => void;
  getColorModelByHSV: (h?: number, s?: number, v?: number) => ColorModel;
}

export type ColorPickerStore = ColorPickerState & ColorPickerAction;
