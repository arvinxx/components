import React from 'react';
import { IntlProvider as IntlProvider_ } from 'react-intl';
import type { LocaleMessages } from '../type';

export const IntlProvider: React.FC<
  Omit<React.ComponentProps<typeof IntlProvider_>, 'messages'> & {
    messages: LocaleMessages;
  }
> = (props) => <IntlProvider_ {...props} />;
