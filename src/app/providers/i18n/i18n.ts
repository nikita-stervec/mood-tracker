import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ruTrans } from './ru';
import { enTrans } from './en';

const getSavedLanguage = (): string => {
  try {
    const savedData = localStorage.getItem('UserState');
    if (savedData) {
      const userState = JSON.parse(savedData);
      return userState.language || 'ru';
    }
  } catch (e) {
    console.error('Error parsing UserState from localStorage', e);
  }
  return 'ru';
};

const resources = {
  en: {
    translation: enTrans,
  },
  ru: {
    translation: ruTrans,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getSavedLanguage(), // Используем сохраненный язык

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
