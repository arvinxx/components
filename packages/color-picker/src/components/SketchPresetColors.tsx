import type { ChangeEvent } from 'react';
import React from 'react';

import type { ColorChangeHandler, ColorResult, PresetColor } from '../types';
import { Swatch } from './common';

export const SketchPresetColors: React.FC<{
  colors?: PresetColor[] | undefined;
  onClick?: ColorChangeHandler | undefined;
  onSwatchHover?: (color: ColorResult, event: MouseEvent) => void;
}> = ({ colors, onClick = () => {}, onSwatchHover }) => {
  const styles = {
    colors: {
      margin: '0 -10px',
      padding: '10px 0 0 10px',
      borderTop: '1px solid #eee',
      display: 'flex',
      flexWrap: 'wrap',
      position: 'relative',
    },
    swatchWrap: { width: '16px', height: '16px', margin: '0 10px 10px 0' },
    swatch: {
      msBorderRadius: '3px',
      MozBorderRadius: '3px',
      OBorderRadius: '3px',
      WebkitBorderRadius: '3px',
      borderRadius: '3px',
      msBoxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
      MozBoxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
      OBoxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
      WebkitBoxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
    },
  } as const;

  const handleClick = (hex: string, e: ChangeEvent<HTMLInputElement>) => {
    onClick?.(
      {
        hex,
        source: 'hex',
      } as any,
      e,
    );
  };

  return (
    <div style={styles.colors} className="flexbox-fix">
      {colors?.map((colorObjOrString) => {
        const c =
          typeof colorObjOrString === 'string'
            ? { color: colorObjOrString, title: undefined }
            : colorObjOrString;
        const key = `${c.color}${c?.title || ''}`;
        return (
          <div key={key} style={styles.swatchWrap}>
            <Swatch
              {...c}
              style={styles.swatch}
              onClick={handleClick}
              onHover={onSwatchHover}
              focusStyle={{
                boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${c.color}`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SketchPresetColors;
