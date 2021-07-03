import { useEffect, useState } from 'react';
import { useStoredLocale } from './useStoredLocale';
import type { LocaleMessageMaps } from './types';

/**
 * 创建本地语料库
 */
export const useLocaleMessages = (messageObj: LocaleMessageMaps) => {
  const { locale } = useStoredLocale();
  const [messages, setMessages] = useState(messageObj[locale]);

  useEffect(() => {
    setMessages(messageObj[locale]);
  }, [locale]);

  return { locale, messages };
};
