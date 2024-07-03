import EmojiCalendar from "@/components/calendar";
import Footer from "@/components/Footer";
import {metadata} from "@/app/[lang]/layout";


// async function getLocaleData(locale) {
//   try {
//     const localeData = await import(`date-fns/locale/${locale}`);
//     return localeData.default || localeData;
//   } catch (error) {
//     console.log('---error', error);
//     const fallbackLocaleData = await import('date-fns/locale/en-US');
//     return fallbackLocaleData.default || fallbackLocaleData;
//   }
// }

export default async function Page({ lang }) {
  
  // const locale = await getLocaleData(params.lang);
  
  console.log('RootLayout----params', lang);


  return (
    <>
      <EmojiCalendar lang={lang || 'en-US'} />
      <Footer lang={lang}>
        {
          metadata.description.split("\n").map((line, index) => (
            <p key={index} className={"mb-1"}>
              {line}
            </p>
          ))
        }
      </Footer>
    </>
  );
}
