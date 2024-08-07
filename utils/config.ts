import { AdapterDateFns } from "@/components/calendar/DateFnsAdapter";
import { getLocale } from "@/utils";

export const footerInfo = {
  description: `Printing a calendar is as simple as clicking a button. Just hit the big red \"Print\" button and you have your calendar. Want to add notes? \n Click on a day and start typing. No internet connection? No problem. Download one of our many available PDF calendars and print directly from your computer.`,
};

export const metadata = {
  title: "Printable Calendars",
  description: [
    "Easily print a calendar for ",
    " directly from your browser. Simply click print for a quick and free experience.",
  ],
  site: 'https://x-calendar.com/',
};

const noTransStr = '----';

export const dynamicMetadata = async (params) => {
  const { lang, date } = params;
  const locale = getLocale(lang);
  
  
  const transTxt = await import(`@/services/i18n/${lang}.json`).catch(() => import(`@/services/i18n/0.json`));
  
  const dfs = new AdapterDateFns({ locale });
  
  const c = date?.length ? new Date(date[1], date[0] - 1) : new Date();
  
  const my = dfs.formatByString(c, "MMMM yyyy");
  
  return {
    title: `${my} ${transTxt.title}`,
    description: transTxt.description.replace(noTransStr, my),
    keywords: transTxt.keywords,
  };
};