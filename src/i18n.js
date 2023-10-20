import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const getLang = localStorage.getItem("i18nextLng");

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["uz", "ru", "en"],
    fallbackLng: "en",
    lng: getLang || "en",
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/assets/locals/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => console.log("i18n initialized"))
  .catch((error) => console.error("i18n initialization failed:", error));
