import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import type { PrimitiveType } from 'intl-messageformat';
import type { LocalesType, LocaleKey } from './type';

/**
 *
 */
export const useI18n = <T>(inputMessage: T) => {
  const [locale, setLocale] = useState<LocalesType>('zh-CN');
  const [messages, setMessages] = useState<T>(inputMessage);

  useEffect(() => {
    switch (locale) {
      case 'en-US':
        setMessages(inputMessage);
        break;
      case 'zh-CN':
      default:
        setMessages(inputMessage);
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
