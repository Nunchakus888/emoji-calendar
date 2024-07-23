import EmojiCalendar from "@/components/calendar";
import type { Metadata } from "next";
import { metadata as md } from "@/utils/config";
import { AdapterDateFns } from "@/components/calendar/DateFnsAdapter";
import * as localeMap from "date-fns/locale";

export default async function Page({ params }) {
  return <EmojiCalendar lang={params.lang || "en-US"} />;
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { lang, date } = params;
  const locale =
    localeMap[lang.replace(/-(\w){1}/, (_, letter) => letter.toUpperCase())];

  const dfs = new AdapterDateFns({ locale });

  const c = date?.length ? new Date(date[1], date[0] - 1) : new Date();

  return {
    ...md,
    title: `${md.title} ${dfs.formatByString(c, "MMMM yyyy")}`,
  };
}
