import { mapDataCountToLevel } from './index';

test('mapDataCountToLevel', () => {
  expect(mapDataCountToLevel(0)).toBe(0);
  expect(mapDataCountToLevel(1)).toBe(1);
  expect(mapDataCountToLevel(4)).toBe(2);
  expect(mapDataCountToLevel(12)).toBe(3);
  expect(mapDataCountToLevel(20)).toBe(4);
});
