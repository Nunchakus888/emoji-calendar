import EmojiCalendar from "@/components/calendar";

export default async function Page(params) {
  
  // const locale = await getLocaleData(params.lang);
  
  console.log('RootLayout----params', params);


  return (
    <EmojiCalendar lang={params.lang || 'en-US'} />
  );
}
