import { YMLToJSON } from './yml';

describe('YML 数据转换', () => {
  it('正常转换', () => {
    const yml = `
- 标题: 渐变色 Logo
  描述: 渐变色
  链接: https://gw.alipayobjects.com/zos/antfincdn/LFmaI3%26OJh/logo.svg
- 标题: 黑色 Logo
  描述: 亮色背景下使用
  链接: https://gw.alipayobjects.com/zos/antfincdn/FEuGy%26pKf2/black-logo.svg
- 标题: 黑色方形 Logo
  描述: 亮色背景下使用
  链接: https://gw.alipayobjects.com/zos/antfincdn/iCZHoHFqZM/squre-black.svg
- 标题: 白色方形 Logo
  描述: 亮色背景下使用
  反色: true
  链接: https://gw.alipayobjects.com/zos/antfincdn/9IE%24pNh%26d3/squre-white.svg
- 标题: 白色 Logo
  描述: 暗色背景下使用
  反色: true
  padding: 12
  反色背景色: black
  链接: https://gw.alipayobjects.com/zos/antfincdn/5qY87lPw9U/white-logo.svg
- 标题: 白色 Logo
  描述: 暗色背景下使用
  反色: true
  反色背景色: "#1fadd3"
  链接: https://gw.alipayobjects.com/zos/antfincdn/3vXiuFe18O/black-white.svg
- 标题: 黑色 Logo
  描述: 亮色背景下使用
  链接: https://gw.alipayobjects.com/zos/antfincdn/fmXECsJXUY/light.svg

`;

    expect(YMLToJSON(yml)).toEqual({
      data: [
        {
          description: '渐变色',
          title: '渐变色 Logo',
          url:
            'https://gw.alipayobjects.com/zos/antfincdn/LFmaI3%26OJh/logo.svg',
        },
        {
          description: '亮色背景下使用',
          title: '黑色 Logo',
          url:
            'https://gw.alipayobjects.com/zos/antfincdn/FEuGy%26pKf2/black-logo.svg',
        },
        {
          description: '亮色背景下使用',
          title: '黑色方形 Logo',
          url:
            'https://gw.alipayobjects.com/zos/antfincdn/iCZHoHFqZM/squre-black.svg',
        },
        {
          dark: true,
          description: '亮色背景下使用',
          title: '白色方形 Logo',
          url:
            'https://gw.alipayobjects.com/zos/antfincdn/9IE%24pNh%26d3/squre-white.svg',
        },
        {
          dark: true,
          darkBackground: 'black',
          description: '暗色背景下使用',
          padding: 12,
          title: '白色 Logo',
          url:
            'https://gw.alipayobjects.com/zos/antfincdn/5qY87lPw9U/white-logo.svg',
        },
        {
          dark: true,
          darkBackground: '#1fadd3',
          description: '暗色背景下使用',
          title: '白色 Logo',
          url:
            'https://gw.alipayobjects.com/zos/antfincdn/3vXiuFe18O/black-white.svg',
        },
        {
          description: '亮色背景下使用',
          title: '黑色 Logo',
          url:
            'https://gw.alipayobjects.com/zos/antfincdn/fmXECsJXUY/light.svg',
        },
      ],
    });
  });
});
