import type { FC } from 'react';
import React, { memo } from 'react';
import reactCSS from 'reactcss';
import isEqual from 'lodash/isEqual';

import { Checkboard } from '../common';

import { useStore } from '../../store';
import type { ColorPickerProps } from '../../types';

export const Previewer: FC<ColorPickerProps> = memo(() => {
  const rgba = useStore((s) => s.colorModel.rgba(), isEqual);

  const styles: any = reactCSS({
    default: {
      color: {
        width: '24px',
        height: '24px',
        position: 'relative',
        marginTop: '4px',
        marginLeft: '4px',
        borderRadius: 12,
        overflow: 'hidden',
      },
      activeColor: {
        borderRadius: 12,
        absolute: '0px 0px 0px 0px',
        background: `rgba(${rgba.join(',')})`,
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
      },
    },
  });

  return (
    <div style={styles.color}>
      <Checkboard />
      <div style={styles.activeColor} />
    </div>
  );
});

export default Previewer;
