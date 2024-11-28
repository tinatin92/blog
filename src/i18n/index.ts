import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homePageKa from "./ka/pages/home.json";
import homePageEn from "./en/pages/home.json";
import aboutPageKa from "./ka/pages/about.json";
import aboutPageEn from "./en/pages/about.json";
import registrationEn from "./en/pages/registration.json";
import registrationKa from "./ka/pages/registration.json";
import profileKa from './ka/pages/profile.json'
import profileEn from './en/pages/profile.json'
import loginKa from './ka/pages/login.json'
import loginEn from './en/pages/login.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "home-page": homePageEn,
          "about-page": aboutPageEn,
          "registration": registrationEn,
          "profile":profileEn,
          "login":loginEn
        },
      },
      ka: {
        translation: {
          "home-page": homePageKa,
          "about-page": aboutPageKa,
          "registration": registrationKa, 
          "profile":profileKa,
          "login":loginKa
        },
      },
    },
    lng: "ka", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, 
    },
  });
