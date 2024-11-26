import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homePageKa from "./ka/pages/home.json";
import homePageEn from "./en/pages/home.json";
import aboutPageKa from "./ka/pages/about.json";
import aboutPageEn from "./en/pages/about.json";
import registrationEn from "./en/pages/registration.json";
import registrationKa from "./ka/pages/registration.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "home-page": homePageEn,
          "about-page": aboutPageEn,
          "registration": registrationEn,
        },
      },
      ka: {
        translation: {
          "home-page": homePageKa,
          "about-page": aboutPageKa,
          "registration": registrationKa, 
        },
      },
    },
    lng: "ka", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, 
    },
  });
