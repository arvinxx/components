import React from 'react';
import { act, findByTestId, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import createI18n from '@arvinxu/i18n';
import type { LocaleMessageMaps } from '@arvinxu/i18n';

const zhCN = {
  hello: '你好',
};
const en = {
  hello: 'hello',
};
const locales: LocaleMessageMaps = {
  'zh-CN': zhCN,
  'en-US': en,
};

describe('createI18nHooks', () => {
  const { useFormatMessage, IntlProvider, useStoredLocale } =
    createI18n(locales);

  const App = () => {
    const f = useFormatMessage();
    return <div data-testid="test">{f('hello')}</div>;
  };

  it('useFormatMessage', async () => {
    const { container } = render(
      <IntlProvider>
        <App />
      </IntlProvider>,
    );
    const div = await findByTestId(container, 'test');

    expect(div.innerHTML).toEqual('你好');
  });

  it('useStoreLocale', async () => {
    const { result } = renderHook(useStoredLocale);
    expect(result.current.locale).toEqual('zh-CN');

    const { container } = render(
      <IntlProvider>
        <App />
      </IntlProvider>,
    );
    const div = await findByTestId(container, 'test');

    expect(div.innerHTML).toEqual('你好');

    act(() => {
      result.current.switchLocale('en-US');
    });
    expect(result.current.locale).toEqual('en-US');

    const { container: ctn } = render(
      <IntlProvider>
        <App />
      </IntlProvider>,
    );
    const div2 = await findByTestId(ctn, 'test');
    expect(div2.innerHTML).toEqual('hello');
  });
});
