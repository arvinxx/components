import type { ComponentProps, FC } from 'react';
import React from 'react';

import { IntlProvider as IntlProvider_ } from 'react-intl';

import type { MessageObj } from './types';

export const Intl: FC<
  Omit<ComponentProps<typeof IntlProvider_>, 'messages'> & {
    messages: MessageObj;
  }
> = (props) => <IntlProvider_ {...props} />;
