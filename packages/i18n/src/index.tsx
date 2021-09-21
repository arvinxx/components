import type { FC } from 'react';
import React from 'react';
import { useIntl } from 'react-intl';

import { Intl } from './IntlProvider';
import { useLocaleMessages } from './useLocaleMessages';
import { useStoredLocale } from './useStoredLocale';

import type { LocaleMessageMaps, PrimitiveType } from './types';

/**
 *
 */
const createI18n = <T extends Record<string, string>>(
  messageObj: LocaleMessageMaps<T>,
) => {
  const IntlProvider: FC = ({ children }) => {
    const { locale, messages } = useLocaleMessages(messageObj);
    return (
      <Intl defaultLocale={'zh-CN'} locale={locale} messages={messages}>
        {children}
      </Intl>
    );
  };

  const useFormatMessage = (): ((
    id: keyof T,
    values?: Record<string, PrimitiveType>,
  ) => string) => {
    const intl = useIntl();

    // @ts-ignore
    return (id, values) => intl.formatMessage({ id }, values);
  };

  return { useFormatMessage, IntlProvider, useStoredLocale };
};

export type { LocaleMessageMaps } from './types';

export default createI18n;
