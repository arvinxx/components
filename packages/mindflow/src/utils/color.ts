/**
 * 将 rgba 转为 hex
 * @param values
 */
export const rgba2hex = (values: number[]) => {
  const a = values[3];

  const r = Math.floor(a * values[0] + (1 - a) * 255);
  const g = Math.floor(a * values[1] + (1 - a) * 255);
  const b = Math.floor(a * values[2] + (1 - a) * 255);

  return `#${`0${r.toString(16)}`.slice(-2)}${`0${g.toString(16)}`.slice(
    -2,
  )}${`0${b.toString(16)}`.slice(-2)}`;
};
