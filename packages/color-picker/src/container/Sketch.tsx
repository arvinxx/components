import type { FC } from 'react';
import React from 'react';
import reactCSS from 'reactcss';
import merge from 'lodash/merge';
import isEqual from 'lodash/isEqual';
import cls from 'classnames';

import { Saturation, Hue, Alpha, Checkboard } from '../components/common';
import SketchFields from '../components/SketchFields';
import SketchPresetColors from '../components/SketchPresetColors';

import { colorSelector, useStore } from '../store';
import type { ColorPickerProps } from '../types';

export const Sketch: FC<ColorPickerProps> = ({ onSwatchHover, className }) => {
  const {
    presetColors,
    onChange,
    styles: passedStyles,
    width,
    disableAlpha,
    updateAlpha,
    updateByHex,
    updateHue,
    updateByHsv,
  } = useStore();

  const { rgb, hsl, hsv, hex } = useStore(colorSelector, isEqual);

  const styles: any = reactCSS(
    //@ts-ignore
    merge(
      {
        default: {
          picker: {
            width,
            padding: '10px 10px 0',
            boxSizing: 'initial',
            background: '#fff',
            borderRadius: '4px',
            // boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)',
            boxShadow: '0 0 0 1px rgba(0,0,0,.15)',
          },
          saturation: {
            width: '100%',
            paddingBottom: '75%',
            position: 'relative',
            overflow: 'hidden',
          },
          Saturation: {
            radius: '3px',
            shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
          },
          controls: {
            display: 'flex',
          },
          sliders: {
            padding: '4px 0',
            flex: '1',
          },
          color: {
            width: '24px',
            height: '24px',
            position: 'relative',
            marginTop: '4px',
            marginLeft: '4px',
            borderRadius: '50%',
            overflow: 'hidden',
          },
          activeColor: {
            absolute: '0px 0px 0px 0px',
            background: `rgba(${rgb!.r},${rgb!.g},${rgb!.b},${rgb!.a})`,
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
          },
          hue: {
            position: 'relative',
            height: '10px',
            overflow: 'hidden',
          },
          Hue: {
            radius: '2px',
            shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
          },

          alpha: {
            position: 'relative',
            height: '10px',
            marginTop: '4px',
            overflow: 'hidden',
          },
          Alpha: {
            radius: '2px',
            shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
          },
          ...passedStyles,
        },
        disableAlpha: {
          color: {
            height: '10px',
          },
          hue: {
            height: '10px',
          },
          alpha: {
            display: 'none',
          },
        },
      },
      passedStyles,
    ),
    { disableAlpha },
  );

  return (
    <div style={styles.picker} className={cls('avx-sketch-picker', className)}>
      <div style={styles.saturation}>
        <Saturation
          style={styles.Saturation}
          hsl={hsl}
          hsv={hsv}
          onChange={updateByHsv}
          radius={6}
        />
      </div>
      <div style={styles.controls} className="flexbox-fix">
        <div style={styles.sliders}>
          <div style={styles.hue}>
            <Hue
              style={styles.Hue}
              hsl={hsl}
              onChange={({ h }) => {
                updateHue(h);
              }}
              radius={4}
            />
          </div>
          <div style={styles.alpha}>
            <Alpha
              style={styles.Alpha}
              rgb={rgb}
              hsl={hsl}
              onChange={({ a }) => {
                updateAlpha(a);
              }}
              radius={4}
            />
          </div>
        </div>
        <div style={styles.color}>
          <Checkboard />
          <div style={styles.activeColor} />
        </div>
      </div>

      <SketchFields rgb={rgb} hsl={hsl} hex={hex} onChange={onChange} disableAlpha={disableAlpha} />
      <SketchPresetColors
        colors={presetColors}
        onClick={(e) => {
          updateByHex(e.hex);
        }}
        onSwatchHover={onSwatchHover}
      />
    </div>
  );
};

export default Sketch;
