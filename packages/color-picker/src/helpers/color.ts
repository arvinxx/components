import tinycolor from 'tinycolor2';

export const isValidHex = (hex: string | any[]) => {
  if (hex === 'transparent') {
    return true;
  }
  // disable hex4 and hex8
  const lh = String(hex).charAt(0) === '#' ? 1 : 0;
  // @ts-ignore
  return hex.length !== 4 + lh && hex.length < 7 + lh && tinycolor(hex).isValid();
};

export const red = {
  hsl: { a: 1, h: 0, l: 0.5, s: 1 },
  hex: '#ff0000',
  rgb: { r: 255, g: 0, b: 0, a: 1 },
  hsv: { h: 0, s: 1, v: 1, a: 1 },
};
