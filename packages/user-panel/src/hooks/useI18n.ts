/* istanbul ignore file */

import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import type { PrimitiveType } from 'intl-messageformat';
import type { LocaleKey, LocaleMessages, LocalesType } from '../types';

import zh from '../locales/zh-CN';

/**
 *
 */
export const useI18n = () => {
  const [locale, setLocale] = useState<LocalesType>('zh-CN');
  const [messages, setMessages] = useState<LocaleMessages>(zh);

  useEffect(() => {
    switch (locale) {
      case 'en-US':
        setMessages(zh);
        break;
      case 'zh-CN':
      default:
        setMessages(zh);
        break;
    }
  }, [locale]);

  const switchLocale = (l: LocalesType): void => {
    setLocale(l);
  };

  return { locale, messages, switchLocale };
};

export const useFormatMessage = (): ((
  id: LocaleKey,
  values?: Record<string, PrimitiveType>,
) => string) => {
  const intl = useIntl();
  return (id, values) => intl.formatMessage({ id }, values);
};
