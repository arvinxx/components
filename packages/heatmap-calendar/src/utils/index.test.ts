import { mapDataCountToLevel, mapToMonth } from './index';

test('mapDataCountToLevel', () => {
  expect(mapDataCountToLevel(0)).toBe(0);
  expect(mapDataCountToLevel(1)).toBe(1);
  expect(mapDataCountToLevel(4)).toBe(2);
  expect(mapDataCountToLevel(12)).toBe(3);
  expect(mapDataCountToLevel(20)).toBe(4);
});

test('mapToMonth', () => {
  expect(mapToMonth(0)).toBe('');
  expect(mapToMonth(2)).toBe('MAY');
  expect(mapToMonth(6)).toBe('JUN');
  expect(mapToMonth(10)).toBe('JUL');
  expect(mapToMonth(15)).toBe('AUG');
  expect(mapToMonth(19)).toBe('SEP');
  expect(mapToMonth(24)).toBe('OCT');
});
