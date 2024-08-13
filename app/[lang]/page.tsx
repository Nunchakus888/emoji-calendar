import EmojiCalendar from "@/components/calendar";
import type { Metadata } from "next";
import { dynamicMetadata } from "@/utils/config";

export default async function Page({ params }) {
  const { description } = await dynamicMetadata(params);
  return (
    <>
      <h1 className="absolute top-0 w-0 h-0 invisible">{description}</h1>
      <EmojiCalendar lang={params.lang || "en-US"} />
    </>
  )
}