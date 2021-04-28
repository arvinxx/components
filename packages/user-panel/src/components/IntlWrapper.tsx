import React from 'react';
import type { FC } from 'react';
import { useI18n } from '../hooks';
import { IntlProvider } from './Intl';

const IntlWrapper: FC = ({ children }) => {
  const { locale, messages } = useI18n();
  return (
    <IntlProvider defaultLocale={'zh-CN'} locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};
export default IntlWrapper;
