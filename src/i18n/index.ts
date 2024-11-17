import i18n from "i18next"
import { /* useTranslation,  */initReactI18next } from "react-i18next";
import homePageKa from './ka/pages/home.json'
import homePageEn from './en/pages/home.json'
import aboutPageKa from './ka/pages/home.json'
import aboutPageEn from './en/pages/about.json'


i18n
  .use(initReactI18next)
  .init({
    
    resources: {
      en: {
        translation: {
          "home-page": homePageEn,
          "about-page": aboutPageEn
        }
        
      },
      ka: {
        translation: {
          "home-page": homePageKa,
          "about-page": aboutPageKa
        }
    
      }
    },
    lng: "ka", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });