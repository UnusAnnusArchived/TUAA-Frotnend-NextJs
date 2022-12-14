import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { ILanguage } from "../types";

//Import language definitions
import en from "./en";
import es from "./es";
import fr from "./fr";
import de from "./de";
import fil from "./fil";
import sv from "./sv";

export const initTranslations = async (locale: string) => {
  await i18next.use(initReactI18next).init({
    resources: {
      en,
      es,
      fr,
      de,
      fil,
      sv,
    },
    lng: locale,
    fallbackLng: "en",
    interpolation: {
      escapeValue: true,
    },
  });
};

export const availableLanguages: ILanguage[] = [
  en.language,
  es.language,
  fr.language,
  de.language,
  fil.language,
  sv.language,
];
