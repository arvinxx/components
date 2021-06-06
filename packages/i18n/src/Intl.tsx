import React from 'react';
import { IntlProvider as IntlProvider_ } from 'react-intl';
import type { IntlProviderProps } from './type';

export const IntlProvider: IntlProviderProps = (props) => (
  <IntlProvider_ {...props} />
);
