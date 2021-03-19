import {
  rgba2hex,
  mapNodeTypeToColor,
  mapReferenceTypeToColor,
  mapColorToHex,
  getColorByType,
} from './color';

describe('rgba2hex', () => {
  it('返回灰色', () => {
    expect(rgba2hex([0, 0, 0, 0.15])).toEqual('#d8d8d8');
  });
});

describe('mapColorToHex', () => {
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
  it('返回灰色', () => {
    expect(mapColorToHex('gray')).toEqual('#8f8f8f');
    expect(mapColorToHex('123')).toEqual('#8f8f8f');
  });
});

test('mapNodeTypeToColor', () => {
  expect(mapNodeTypeToColor('question')).toEqual('red');
  expect(mapNodeTypeToColor('action')).toEqual('green');
  expect(mapNodeTypeToColor('idea')).toEqual('yellow');
  expect(mapNodeTypeToColor('subject')).toEqual('blue');
  expect(mapNodeTypeToColor('subject')).toEqual('blue');
  expect(mapNodeTypeToColor('123')).toEqual('grey');
});

test('mapReferenceTypeToColor', () => {
  expect(mapReferenceTypeToColor('rebuttal')).toEqual('purple');
  expect(mapReferenceTypeToColor('warrant')).toEqual('blue');
  expect(mapReferenceTypeToColor('backing')).toEqual('yellow');
  expect(mapReferenceTypeToColor('ground')).toEqual('green');
  // @ts-ignore
  expect(mapReferenceTypeToColor('123')).toEqual('gray');
});

test('getColorByType', () => {
  const color = getColorByType('action');
  expect(color.hex()).toBe('#52c41a');
});
