import type { CSSProperties } from 'react';
import type React from 'react';

export interface HSLColor {
  h: number;
  l: number;
  s: number;
}

export interface HSVColor {
  h: number;
  s: number;
  v: number;
}

export interface RGBColor {
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

export type PresetColor = { color: string; title: string } | string;

export interface ColorPickerProps {
  color?: Color | undefined;
  className?: string | undefined;

  onChange?: ColorChangeHandler;
  onChangeComplete?: ColorChangeHandler | undefined;

  disableAlpha?: boolean | undefined;
  presetColors?: PresetColor[] | undefined;
  width?: string | undefined;
  styles?: Partial<Classes<SketchPickerStylesProps>> | undefined;
  onSwatchHover?: (color: ColorResult, event: MouseEvent) => void;
}
