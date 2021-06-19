import type messages from '../locales/zh-CN';

export type PanelContentType = 'login' | 'register' | 'forgot';

export type LocalesType = 'en-US' | 'zh-CN';
export type LocaleMessages = typeof messages;
export type LocaleKey = keyof LocaleMessages;

export * from './IUserLogin';
