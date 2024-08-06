import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as localeMap from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function MonthMatcher() {
  const [_, lang, mmYYYY] = window.location.pathname.match(
    /^\/([\w-]+)[\/]*([\d{2}[\/-]*[\d]{4})*/,
  );
  return mmYYYY && mmYYYY.split(/\/|-/).reverse();
}

export function pathOfDate(path) {
  window.history.replaceState(null, "", path);
}

export const getLocale = lang => localeMap[lang.replace(/-(\w){1}/, (_, letter) => letter.toUpperCase())];
export const languages = Object.keys(localeMap).map((k) => `${localeMap[k].code}`);
