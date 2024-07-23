import EmojiCalendar from "@/components/calendar";
import type { Metadata } from "next";
import { dynamicMetadata } from "@/utils/config";

export default async function Page({ params }) {
  return <EmojiCalendar lang={params.lang || "en-US"} />;
}

export async function generateMetadata({ params }): Promise<Metadata> {
  return dynamicMetadata(params);
}
