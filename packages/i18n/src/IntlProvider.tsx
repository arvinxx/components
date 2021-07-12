import type { ComponentProps, FC } from 'react';
import React from 'react';

import { IntlProvider as IntlProvider_ } from 'react-intl';

export const Intl: FC<
  Omit<ComponentProps<typeof IntlProvider_>, 'messages'> & {
    messages: Record<string, string>;
  }
> = (props) => <IntlProvider_ {...props} />;
