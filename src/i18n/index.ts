import i18n from "i18next"
import { /* useTranslation,  */initReactI18next } from "react-i18next";


i18n
  .use(initReactI18next)
  .init({
    
    resources: {
      en: {
        translation: {
          "lang-version": "Welcome to React and react-i18next"
        }
      },
      ka: {
        translation: {
            "lang-version":"კეთილი იყოს თქვენი მობრძანება რეაქტის კურსზე"
        }
      }
    },
    lng: "ka", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });