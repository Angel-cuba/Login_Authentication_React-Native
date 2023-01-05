import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
// Import the locales
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';

//Importing the translations
import en from './en/index';
import es from './sp/index';
import fi from './fi/index';

// Set the key-value pairs for the different languages you want to support.
const LANGUAGES = {
  en,
  es,
  fi,
};
const LANGUAGES_CODES = Object.keys(LANGUAGES);

// Set the i18n-js config.
const LANGUAGE_DETECTOR = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    AsyncStorage?.getItem('user-language', (err, language) => {
      // if error fetching stored data or no language was stored
      // display errors when in DEV mode as console statements
      if (err || !language) {
        if (err) {
          console.log('Error fetching Languages from asyncstorage ', err);
        } else {
          console.log('No language is set, choosing English as fallback');
        }
        const findBestAvailableLanguage = Localization.findBestAvailableLanguage(LANG_CODES);

        callback(findBestAvailableLanguage.languageTag || 'en');
        return;
      }
      callback(language);
    });
  },
  init: () => {},
  cacheUserLanguage: (language) => {
    AsyncStorage?.setItem('user-language', language);
  },
};

// Initialize i18next
i18n
  // detect language
  .use(LANGUAGE_DETECTOR)
  .use(backend)
  .use(initReactI18next)
  // set options
  .init({
    debug: true,
    react: {
      wait: true,
      useSuspense: false,
    },
    // Set the default language to English. This is required.
    // If a value is missing from a language it'll fallback to English.
    // If you want to use another fallback language, use the `fallbackLng` option.
    // See https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: LANGUAGES,
  });

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default i18n;
