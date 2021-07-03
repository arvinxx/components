export type LocalesType = 'en-US' | 'zh-CN';

export type LocaleMessageMaps<T = Record<string, string>> = {
  'zh-CN': T;
  'en-US'?: T;
};

export type { PrimitiveType } from 'intl-messageformat';
