import { mapColorToHex } from './dataMap';

describe('getHexFromColor', () => {
  it('返回红色', () => {
    expect(mapColorToHex('red')).toEqual('#ff4d4f');
    expect(mapColorToHex('pink')).toEqual('#ff4d4f');
  });

  it('返回蓝色', () => {
    expect(mapColorToHex('blue')).toEqual('#69c0ff');
    expect(mapColorToHex('cyan')).toEqual('#69c0ff');
  });
  it('返回绿色', () => {
    expect(mapColorToHex('green')).toEqual('#52c41a');
  });
  it('返回黄色', () => {
    expect(mapColorToHex('yellow')).toEqual('#faad14');
  });
  it('返回青色', () => {
    expect(mapColorToHex('teal')).toEqual('#5cdbd3');
  });
  it('返回紫色', () => {
    expect(mapColorToHex('purple')).toEqual('#b37feb');
  });
});
