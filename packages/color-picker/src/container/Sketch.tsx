import type { FC } from 'react';
import React, { memo } from 'react';
import reactCSS from 'reactcss';
import cls from 'classnames';

import SketchFields from '../components/SketchFields';
import Alpha from '../components/Alpha';
import Hue from '../components/Hue';
import Saturation from '../components/Saturation';
import Previewer from '../components/Previewer';
import SketchPresetColors from '../components/SketchPresetColors';

import type { ColorPickerProps } from '../types';

export const Sketch: FC<ColorPickerProps> = memo(({ className }) => {
  const styles: any = reactCSS({
    default: {
      picker: {
        width: 200,
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
      controls: {
        display: 'flex',
      },
      sliders: {
        padding: '4px 0',
        flex: '1',
      },

      hue: {
        position: 'relative',
        height: '10px',
        overflow: 'hidden',
      },

      alpha: {
        position: 'relative',
        height: '10px',
        marginTop: '4px',
        overflow: 'hidden',
      },
    },
  });

  return (
    <div style={styles.picker} className={cls('avx-sketch-picker', className)}>
      <div style={styles.saturation}>
        <Saturation />
      </div>
      <div style={styles.controls}>
        <div style={styles.sliders}>
          <div style={styles.hue}>
            <Hue />
          </div>
          <div style={styles.alpha}>
            <Alpha />
          </div>
        </div>
        <Previewer />
      </div>

      <SketchFields />
      <SketchPresetColors />
    </div>
  );
});

export default Sketch;
