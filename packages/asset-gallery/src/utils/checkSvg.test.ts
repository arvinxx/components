import { checkSvg } from './checkSvg';

test('checkSvg', () => {
  const isSvg = checkSvg(
    'https://gw.alipayobjects.com/zos/antfincdn/LFmaI3%26OJh/logo.svg',
  );

  expect(isSvg).toBeTruthy();
});
