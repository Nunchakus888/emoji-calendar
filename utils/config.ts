import * as localeMap from "date-fns/locale";
import { AdapterDateFns } from "@/components/calendar/DateFnsAdapter";
// import { translateText } from '@/services/translate';
// import { translateText as t } from '@/services/trans';

import * as T from '@google-cloud/translate';


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

export const dynamicMetadata = (params) => {
  const { lang, date } = params;
  const locale =
    localeMap[lang.replace(/-(\w){1}/, (_, letter) => letter.toUpperCase())];

  const dfs = new AdapterDateFns({ locale });

  const c = date?.length ? new Date(date[1], date[0] - 1) : new Date();

  const my = dfs.formatByString(c, "MMMM yyyy");
  
  const r = translateText(metadata.title, locale);
  // t(metadata.title);
  
  return {
    description: metadata.description.join(my),
    title: `${metadata.title} ${my}`,
  };
};


// const translationClient = new TranslationServiceClient({ key: process.env.GOOGLE_TRANSLATE_API_KEY });

export async function translateText(text, targetLanguageCode, sourceLanguageCode = 'en') {
  // Construct request
  const request = {
    parent: `projects/x-calendar-430915/locations/global`,
    contents: [text],
    mimeType: 'text/plain', // mime types: text/plain, text/html
    sourceLanguageCode,
    targetLanguageCode,
  };
  
  console.log('-----T', T);
  // Run request
  // const [response] = await translationClient.translateText(request);
  //
  // for (const translation of response.translations) {
  //   console.log(`Translation: ${translation.translatedText}`);
  // }
}
