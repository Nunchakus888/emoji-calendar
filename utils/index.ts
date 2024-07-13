import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function MonthMatcher() {
  if (typeof window === undefined) return;
  const [_, lang, mmYYYY] = window.location.pathname.match(/^\/([\w-]+)[\/]*([\d{2}[\/-]*[\d]{4})*/);
  return mmYYYY && mmYYYY.split(/\/|-/).reverse();
}