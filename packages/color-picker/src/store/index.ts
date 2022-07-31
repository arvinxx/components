import create from 'zustand';
import createContext from 'zustand/context';
import { devtools } from 'zustand/middleware';
import chroma from 'chroma-js';

import type { ColorPickerState, ColorPickerStore, SpaceColor } from '../types';
import initialState from './initialState';

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

const createStore = () => {
  const store = create<ColorPickerStore>(
    devtools(
      (set, get) => ({
        ...initialState,

        getColorModelByHSV: (h, s, v) => {
          const { hue, saturation, brightness, colorModel } = get();
          return chroma(
            h ?? hue,
            s ?? saturation / 100,
            v ?? brightness / 100,
            colorModel.alpha(),
            'hsv',
          );
        },
        updateColorMode: (mode) => {
          set({ colorMode: mode });
        },

        internalUpdateColor: (color) => {
          // 如果 color 的 h s v 都是 NaN，那么就要用保存值来替换
          if (color.hsv().every((x) => isNaN(x))) {
            color = get().getColorModelByHSV();
          }

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
          set({ hue: h });
          internalUpdateColor(colorModel.set('hsl.h', h));
        },

        updateByColorSpace: (key, value) => {
          const { colorModel, updateHue, internalUpdateColor, colorMode } = get();
          let v;

          // 将值限定在相应的最大区间内
          v = value > maxValueMap[key] ? maxValueMap[key] : value;
          // 且确保 v 最小值为 0
          if (value < 0) v = 0;

          // 如果是 hue 的更新
          if (key === 'h') {
            updateHue(value);
            return;
          }

          // 如果是 s v l 三个维度值，将其转换为百分比

          if (['s', 'v', 'l'].includes(key)) {
            v /= 100;
          }

          internalUpdateColor(colorModel.set(`${colorMode}.${key}`, v));

          if (colorMode === 'hsv') {
            switch (key) {
              case 's':
                set({ saturation: v * 100 });
                break;
              case 'v':
                set({ brightness: v * 100 });
                break;
            }
          }
        },

        updateByHex: (hex) => {
          const { internalUpdateColor } = get();

          internalUpdateColor(chroma(hex));
        },

        updateBySV: (saturation, value) => {
          const { internalUpdateColor, hue } = get();

          if (saturation < 0) saturation = 0;
          if (saturation > 1) saturation = 1;

          if (value < 0) value = 0;

          if (value > 1) value = 1;

          internalUpdateColor(chroma([hue, saturation, value], 'hsv'));

          set({
            saturation: saturation * 100,
            brightness: value * 100,
          });
        },

        updateByRgb: (rgb) => {
          const { r, g, b } = rgb;
          const { internalUpdateColor, colorModel } = get();

          internalUpdateColor(chroma([r, g, b, colorModel.alpha()], 'rgb'));
        },
      }),
      { name: 'ColorPicker' },
    ),
  );

  store.subscribe((state) => {
    const [newHue, newSaturation, newBrightness] = state.colorModel.hsv();
    if (isNaN(newHue)) return;

    state.hue = newHue;
    state.saturation = Math.ceil(newSaturation * 100);
    state.brightness = Math.ceil(newBrightness * 100);
  });

  return store;
};
const { Provider, useStore, useStoreApi } = createContext<ColorPickerStore>();

export { Provider, useStore, useStoreApi, createStore };

// ============ Selector =========== //

export const colorSpaceSelector = (s: ColorPickerState): SpaceColor => {
  const [r, g, b] = s.colorModel.rgba();
  const hsl = s.colorModel.hsl();

  switch (s.colorMode) {
    case 'rgb': {
      return { r, g, b };
    }
    case 'hsv': {
      return { h: s.hue, s: s.saturation, v: s.brightness };
    }
    case 'hsl': {
      return { h: s.hue, s: hsl[1] * 100, l: hsl[2] * 100 };
    }
  }
};
