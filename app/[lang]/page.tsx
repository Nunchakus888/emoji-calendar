import EmojiCalendar from "@/components/calendar";

export default async function Page({ params }) {
  return <EmojiCalendar lang={params.lang || "en-US"} />;
}
