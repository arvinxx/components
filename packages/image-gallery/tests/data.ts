import type { ImageList } from '@arvinxu/image-gallery';

export const images: ImageList = [
  {
    title: '渐变色 Logo',
    description: '渐变色',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/LFmaI3%26OJh/logo.svg',
  },
  {
    title: '白色 Logo',
    description: '暗色背景下使用',
    dark: true,
    padding: 12,
    darkBackground: 'black',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/5qY87lPw9U/white-logo.svg',
  },
];

export const pngYML = `
- 标题: 渐变色 Logo
  描述: 渐变色
  链接: https://gw.alipayobjects.com/zos/antfincdn/OuMB9liYZV/tupian%2525201.png

- 标题: 黑色 Logo
  描述: 亮色背景下使用
  链接: https://gw.alipayobjects.com/zos/antfincdn/5vmPNr6Qqz/tupian%2525202.png
`;
