import EmojiCalendar from "@/components/calendar";


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

export default async function Page({params}) {
  
  // const locale = await getLocaleData(params.lang);
  
  console.log('RootLayout----params', params.lang);


  return (
    <div className="w-full flex flex-col justify-center items-center">
      <EmojiCalendar lang={params.lang} />
    </div>
  );
}
