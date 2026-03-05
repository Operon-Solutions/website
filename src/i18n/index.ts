import en from "./dictionaries/en";
import zhTW from "./dictionaries/zh-TW";
import type { Dictionary } from "./dictionaries/en";

export type Locale = "en" | "zh-TW";

export const locales: Locale[] = ["en", "zh-TW"];
export const defaultLocale: Locale = "en";

const dictionaries: Record<Locale, Dictionary> = {
  en: en as unknown as Dictionary,
  "zh-TW": zhTW,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
