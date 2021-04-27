import React from 'react';
import type { FC } from 'react';
import { IntlProvider } from './components';
import { useI18n } from './hooks';
import Login from './login';

export interface UserPanelProps {}

const UserPanel: FC<UserPanelProps> = () => {
  const { locale, messages } = useI18n();
  return (
    <IntlProvider defaultLocale={'zh-CN'} locale={locale} messages={messages}>
      <Login />
    </IntlProvider>
  );
};

export default UserPanel;
