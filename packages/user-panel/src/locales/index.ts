import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import zhCN from './zh-CN';
import en from './en-US';

const resources = {
  en: { translation: en },
  'zh-CN': { translation: zhCN },
};

i18n
  .use(initReactI18next)

  .use(LanguageDetector)
  .init({
    resources,

    fallbackLng: 'zh-CN',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
