import type messages from './locales/zh-CN';

export type StateType = {
  status?: 'ok' | 'error';
  type?: string;
  currentAuthority?: 'user' | 'guest';
};

export type LoginParamsType = {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
};

export type LocalesType = 'en-US' | 'zh-CN';
export type LocaleMessages = typeof messages;
export type LocaleKey = keyof LocaleMessages;
