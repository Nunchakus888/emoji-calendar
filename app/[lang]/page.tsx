import EmojiCalendar from "@/components/calendar";

export default async function Page({ params }) {
  console.log("RootLayout----params", params);

  return <EmojiCalendar lang={params.lang || "en-US"} />;
}
