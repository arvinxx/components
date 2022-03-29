import create from 'zustand';
import createContext from 'zustand/context';
import type { Color } from 'chroma-js';
import chroma from 'chroma-js';

import type { HSLColor, HSVColor, RGBColor } from './types';

type ColorMode = 'rgb' | 'hsl';
interface ColorPickerState {
  disableAlpha: boolean;
  width: number;
  styles: any;
  colorMode: ColorMode;
  presetColors: string[];
  onChange?: ({ hex, color }: { hex: string; color: Color }) => void;
  colorModel: Color;
}
interface ColorPickerAction {
  internalUpdateColor: (color: Color) => void;
  updateAlpha: (a: number) => void;
  updateHue: (hue: number) => void;
  updateByHex: (hex: string) => void;
  updateByHsv: (hsv: HSVColor) => void;
}

export type ColorPickerStore = ColorPickerState & ColorPickerAction;

const initialState: ColorPickerState = {
  disableAlpha: false,
  width: 200,
  styles: {},
  colorMode: 'rgb',
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
};

const createStore = () =>
  create<ColorPickerStore>((set, get) => ({
    ...initialState,
    internalUpdateColor: (color) => {
      set({ colorModel: color });

      if (get().onChange) {
        get().onChange({ hex: color.hex('auto'), color });
      }
    },

    updateAlpha: (a) => {
      const { colorModel, internalUpdateColor } = get();
      internalUpdateColor(colorModel.alpha(a));
    },

    updateHue: (h) => {
      const { colorModel, internalUpdateColor } = get();
      internalUpdateColor(colorModel.set('hsl.h', h));
    },

    updateByHex: (hex) => {
      const { internalUpdateColor } = get();

      internalUpdateColor(chroma(hex));
    },

    updateByHsv: (hex) => {
      const { h, s, v, a } = hex;
      const { internalUpdateColor } = get();

      internalUpdateColor(chroma([h, s, v, a], 'hsv'));
    },
  }));

const { Provider, useStore } = createContext<ColorPickerStore>();

export { Provider, useStore, createStore };

export const colorSelector = (
  s: ColorPickerState,
): {
  rgb: RGBColor;
  hsl: HSLColor;
  hsv: HSVColor;
  hex: string;
} => {
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
