import { isValidHex } from './color';

describe('helpers/color', () => {
  describe('isValidHex', () => {
    test('allows strings of length 3 or 6', () => {
      expect(isValidHex('f')).toBeFalsy();
      expect(isValidHex('ff')).toBeFalsy();
      expect(isValidHex('fff')).toBeTruthy();
      expect(isValidHex('ffff')).toBeFalsy();
      expect(isValidHex('fffff')).toBeFalsy();
      expect(isValidHex('ffffff')).toBeTruthy();
      expect(isValidHex('fffffff')).toBeFalsy();
      expect(isValidHex('ffffffff')).toBeFalsy();
      expect(isValidHex('fffffffff')).toBeFalsy();
      expect(isValidHex('ffffffffff')).toBeFalsy();
      expect(isValidHex('fffffffffff')).toBeFalsy();
      expect(isValidHex('ffffffffffff')).toBeFalsy();
    });

    test('allows strings without leading hash', () => {
      // Check a sample of possible colors - doing all takes too long.
      for (let i = 0; i <= 0xffffff; i += 0x010101) {
        const hex = `000000${i.toString(16)}`.slice(-6);
        expect(isValidHex(hex)).toBeTruthy();
      }
    });

    test('allows strings with leading hash', () => {
      // Check a sample of possible colors - doing all takes too long.
      for (let i = 0; i <= 0xffffff; i += 0x010101) {
        const hex = `000000${i.toString(16)}`.slice(-6);
        expect(isValidHex(`#${hex}`)).toBeTruthy();
      }
    });

    test('is case-insensitive', () => {
      expect(isValidHex('ffffff')).toBeTruthy();
      expect(isValidHex('FfFffF')).toBeTruthy();
      expect(isValidHex('FFFFFF')).toBeTruthy();
    });

    test('allow transparent color', () => {
      expect(isValidHex('transparent')).toBeTruthy();
    });

    test('does not allow non-hex characters', () => {
      expect(isValidHex('gggggg')).toBeFalsy();
    });

    test('does not allow numbers', () => {
      // @ts-ignore
      expect(isValidHex(0xffffff)).toBeFalsy();
    });
  });
});
