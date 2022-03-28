import type { CSSProperties } from 'react';
import React from 'react';
import reactCSS from 'reactcss';
import merge from 'lodash/merge';

export interface HSLColor {
  a?: number | undefined;
  h: number;
  l: number;
  s: number;
}

export interface RGBColor {
  a?: number | undefined;
  b: number;
  g: number;
  r: number;
}

interface Classes<T> {
  default: Partial<T>;
  [scope: string]: Partial<T>;
}

export type Color = string | HSLColor | RGBColor;

export interface ColorResult {
  hex: string;
  hsl: HSLColor;
  rgb: RGBColor;
  source?: string;
}

export type ColorChangeHandler = (
  color: ColorResult,
  event: React.ChangeEvent<HTMLInputElement>,
) => void;

export interface SketchPickerStylesProps {
  picker: CSSProperties;
  saturation: CSSProperties;
  Saturation: CSSProperties;
  controls: CSSProperties;
  sliders: CSSProperties;
  color: CSSProperties;
  activeColor: CSSProperties;
  hue: CSSProperties;
  Hue: CSSProperties;
  alpha: CSSProperties;
  Alpha: CSSProperties;
}

export interface ColorPickerProps {
  color?: Color | undefined;
  className?: string | undefined;
  styles?: Partial<Classes<any>> | undefined;
  onChange?: ColorChangeHandler;
  onChangeComplete?: ColorChangeHandler | undefined;
}

export type PresetColor = { color: string; title: string } | string;

export interface SketchPickerProps extends ColorPickerProps {
  disableAlpha?: boolean | undefined;
  presetColors?: PresetColor[] | undefined;
  width?: string | undefined;
  styles?: Partial<Classes<SketchPickerStylesProps>> | undefined;
  onSwatchHover?: (color: ColorResult, event: MouseEvent) => void;
}

import { ColorWrap, Saturation, Hue, Alpha, Checkboard } from '../common';
import SketchFields from './SketchFields';
import SketchPresetColors from './SketchPresetColors';

export const Sketch: React.FC<
  SketchPickerProps & {
    hex?: string;
    hsl?: HSLColor;
    rgb?: RGBColor;
    hsv?: RGBColor;
    renderers?: any;
    width?: any;
  }
> = ({
  width,
  rgb,
  hex,
  hsv,
  hsl,
  onChange,
  onSwatchHover,
  disableAlpha,
  presetColors,
  renderers,
  styles: passedStyles = {},
  className = '',
}) => {
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
            boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)',
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
    <div style={styles.picker} className={`sketch-picker ${className}`}>
      <div style={styles.saturation}>
        <Saturation style={styles.Saturation} hsl={hsl} hsv={hsv} onChange={onChange} />
      </div>
      <div style={styles.controls} className="flexbox-fix">
        <div style={styles.sliders}>
          <div style={styles.hue}>
            <Hue style={styles.Hue} hsl={hsl} onChange={onChange} radius={2} />
          </div>
          <div style={styles.alpha}>
            <Alpha
              style={styles.Alpha}
              rgb={rgb}
              hsl={hsl}
              renderers={renderers}
              onChange={onChange}
              radius={2}
            />
          </div>
        </div>
        <div style={styles.color}>
          <Checkboard />
          <div style={styles.activeColor} />
        </div>
      </div>

      <SketchFields rgb={rgb} hsl={hsl} hex={hex} onChange={onChange} disableAlpha={disableAlpha} />
      <SketchPresetColors colors={presetColors} onClick={onChange} onSwatchHover={onSwatchHover} />
    </div>
  );
};

Sketch.defaultProps = {
  disableAlpha: false,
  width: 200,
  styles: {},
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
};

const SketchPicker = ColorWrap(Sketch) as React.FC<SketchPickerProps>;

export { SketchPicker };
