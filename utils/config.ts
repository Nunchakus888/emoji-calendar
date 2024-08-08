import { AdapterDateFns } from "@/components/calendar/DateFnsAdapter";
import { getLocale } from "@/utils";


export const metadata = {
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
    description: transTxt.description,
    keywords: transTxt.keywords,
  };
};