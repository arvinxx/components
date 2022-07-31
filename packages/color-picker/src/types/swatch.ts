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

export type SpaceColor = RGBColor | HSLColor | HSVColor;
