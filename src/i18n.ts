import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './translations/en/global.json';
import translationES from './translations/es/global.json';

const resources = {
  en: {
    global: translationEN
  },
  es: {
    global: translationES
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    debug: true,
    ns: ['global'],
    defaultNS: 'global',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
