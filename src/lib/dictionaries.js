import "server-only";

const dictionaries = {
  en: (file) => import(`../../locales/en/${file}.json`).then((module) => module.default),
  id: (file) => import(`../../locales/id/${file}.json`).then((module) => module.default),
};

export const getDictionary = async (locale, file) => dictionaries[locale](file);
