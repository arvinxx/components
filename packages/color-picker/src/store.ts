import create from 'zustand';
import createContext from 'zustand/context';
import { devtools } from 'zustand/middleware';

import type { Color } from 'chroma-js';
import chroma from 'chroma-js';

import type { HSLColor, HSVColor, RGBColor } from './types';

export type ColorMode = 'rgb' | 'hsl' | 'hsv';

interface ColorPickerState {
  colorMode: ColorMode;
  presetColors: string[];
  onSwatchHover?: any;
  onChange?: ({ hex, color }: { hex: string; color: Color }) => void;
  colorModel: Color;
  hue: number;
}
interface ColorPickerAction {
  internalUpdateColor: (color: Color) => void;
  updateAlpha: (a: number) => void;
  updateHue: (hue: number) => void;
  updateColorMode: (mode: ColorMode) => void;
  updateByColorSpace: (key: string, value: number) => void;
  updateByHex: (hex: string) => void;
  updateBySV: (saturation: number, value: number) => void;
  updateByRgb: (rgb: RGBColor) => void;
}

export type ColorPickerStore = ColorPickerState & ColorPickerAction;

const maxValueMap = {
  h: 359,
  s: 100,
  v: 100,
  l: 100,
  a: 100,
  r: 255,
  g: 255,
  b: 255,
};

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
};

const createStore = () => {
  const store = create<ColorPickerStore>(
    devtools(
      (set, get) => ({
        ...initialState,

        updateColorMode: (mode) => {
          set({ colorMode: mode });
        },

        internalUpdateColor: (color) => {
          set({ colorModel: color });

          if (get().onChange) {
            get().onChange({ hex: color.hex('auto'), color });
          }
        },

        updateAlpha: (a) => {
          const { colorModel, internalUpdateColor } = get();
          if (a < 0) {
            a = 0;
          } else if (a > 100) {
            a = 100;
          }

          a /= 100;
          internalUpdateColor(colorModel.alpha(a));
        },

        updateHue: (h) => {
          const { colorModel, internalUpdateColor } = get();
          internalUpdateColor(colorModel.set('hsl.h', h));
        },

        updateByColorSpace: (key, value) => {
          const { colorModel, internalUpdateColor, colorMode } = get();
          let v;

          // 将值限定在相应的最大区间内
          v = value > maxValueMap[key] ? maxValueMap[key] : value;
          // 且确保 v 最小值为 0
          if (value < 0) v = 0;

          // 如果是 s v l 三个维度值，将其转换为百分比

          if (['s', 'v', 'l'].includes(key)) {
            v /= 100;
          }

          internalUpdateColor(colorModel.set(`${colorMode}.${key}`, v));
        },

        updateByHex: (hex) => {
          const { internalUpdateColor } = get();

          internalUpdateColor(chroma(hex));
        },

        updateBySV: (saturation, value) => {
          const { internalUpdateColor, colorModel, hue } = get();

          if (saturation < 0) saturation = 0;
          if (saturation > 1) saturation = 1;

          if (value < 0) value = 0;

          if (value > 1) value = 1;

          internalUpdateColor(chroma([hue, saturation, value, colorModel.alpha()], 'hsv'));
        },

        updateByRgb: (rgb) => {
          const { r, g, b, a } = rgb;
          const { internalUpdateColor } = get();

          internalUpdateColor(chroma([r, g, b, a], 'rgb'));
        },
      }),
      { name: 'ColorPicker' },
    ),
  );

  store.subscribe((state) => {
    const newHue = state.colorModel.hsv()[0];
    if (isNaN(newHue)) return;

    state.hue = newHue;
  });
  return store;
};
const { Provider, useStore } = createContext<ColorPickerStore>();

export { Provider, useStore, createStore };

export interface ColorObj {
  rgb: RGBColor;
  hsl: HSLColor;
  hsv: HSVColor;
  hex: string;
}

export const colorSelector = (s: ColorPickerState): ColorObj => {
  const [r, g, b, a] = s.colorModel.rgba();
  const hsv = s.colorModel.hsv();
  const hsl = s.colorModel.hsl();

  return {
    rgb: { r, g, b, a },
    hsv: { h: hsv[0], s: hsv[1], v: hsv[2], a },
    hsl: { h: hsl[0], s: hsl[1], l: hsl[2], a },
    hex: s.colorModel.hex(),
  };
};

export type SpaceColor = RGBColor | HSLColor | HSVColor;

export const colorSpaceSelector = (s: ColorPickerState): SpaceColor => {
  const [r, g, b, a] = s.colorModel.rgba();
  const hsv = s.colorModel.hsv();
  const hsl = s.colorModel.hsl();

  switch (s.colorMode) {
    case 'rgb': {
      return { r, g, b, a };
    }
    case 'hsv': {
      return { h: s.hue, s: hsv[1] * 100, v: hsv[2] * 100, a };
    }
    case 'hsl': {
      return { h: s.hue, s: hsl[1] * 100, l: hsl[2] * 100, a };
    }
  }
};
