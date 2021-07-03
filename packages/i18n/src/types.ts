export type LocalesType = 'en-US' | 'zh-CN';

export type MessageObj = Record<string, string>;

export type LocaleMessageMaps = {
  'zh-CN': MessageObj;
  'en-US'?: MessageObj;
};

export type { PrimitiveType } from 'intl-messageformat';
