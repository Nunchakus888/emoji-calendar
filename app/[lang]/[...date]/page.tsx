import EmojiCalendar from "@/components/calendar";
import { dynamicMetadata } from "@/utils/config";

export default async function Page({ params }) {
  const { description } = await dynamicMetadata(params);
  return (
    <>
      <span className="absolute top-0 w-0 h-0 invisible">{description}</span>
      <EmojiCalendar lang={params.lang || "en-US"} />
    </>
  )
}