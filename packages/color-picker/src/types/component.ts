import type { Color, ColorChangeHandler, ColorResult, StoreUpdaterState } from './store';
import type { CSSProperties } from 'react';

interface Classes<T> {
  default: Partial<T>;
  [scope: string]: Partial<T>;
}

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

export interface StoreUpdaterProps extends StoreUpdaterState {
  color?: Color | undefined;
}

export interface ColorPickerProps {
  color?: Color | undefined;
  className?: string | undefined;

  onChange?: ColorChangeHandler;
  onChangeComplete?: ColorChangeHandler | undefined;
  onSwatchHover?: (color: ColorResult, event: MouseEvent) => void;

  disableAlpha?: boolean | undefined;
  presetColors?: PresetColor[] | undefined;
  width?: string | undefined;
  styles?: Partial<Classes<SketchPickerStylesProps>> | undefined;
}
