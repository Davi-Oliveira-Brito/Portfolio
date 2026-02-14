import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './pt.json';
import en from './en.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            pt: { translation: pt },
            en: { translation: en },
        },
        lng: localStorage.getItem('language') || 'pt',
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;