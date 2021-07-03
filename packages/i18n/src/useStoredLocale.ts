import type { LocalesType } from './types';
import { useLocalStorage } from './useLocalStorage';

/**
 * 创建本地语料库
 */
export const useStoredLocale = () => {
  const [locale, setLocale] = useLocalStorage<LocalesType>('locale', 'zh-CN');

  const switchLocale = (l: LocalesType): void => {
    setLocale(l);
  };

  return { locale, switchLocale };
};
