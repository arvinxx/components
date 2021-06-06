import type { ComponentProps, FC } from 'react';
import type { IntlProvider } from 'react-intl';

export type LocalesType = 'en-US' | 'zh-CN';

export type LocaleKey = string;

export type IntlProviderProps<T = Record<string, string>> = FC<
  Omit<ComponentProps<typeof IntlProvider>, 'messages'> & {
    messages: T;
  }
>;
