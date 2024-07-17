"use client";

import { useMemo, useState } from "react";
import { AdapterDateFns } from "./DateFnsAdapter";
import { usePathname } from "next/navigation";

import { Tabs, DaysNav } from "./tabs";
import Sidebar from "./Sidebar";
import * as localeMap from "date-fns/locale";

import { cn, MonthMatcher, pathOfDate } from "@/utils";

import Footer from "../Footer";
import { metadata } from "@/utils/config";
import { isMobile } from "react-device-detect";

function EmojiCalendar({ lang }) {
  const pathname = usePathname();

  const locale =
    localeMap[lang.replace(/-(\w){1}/, (_, letter) => letter.toUpperCase())];

  const dfs = useMemo(() => new AdapterDateFns({ locale }), [locale]);

  const my = MonthMatcher();

  const [current, setCurrent] = useState(
    my ? new Date(my[0], (my[1] || 1) - 1) : new Date(),
  );

  const weeks = useMemo(() => {
    pathOfDate(`/${lang}/${dfs.formatByString(current, "MM/yyyy")}`);

    const start = dfs.startOfMonth(current);
    const end = dfs.endOfMonth(current);

    return dfs.getWeekArray(current).map((weeks) => {
      return weeks.map((day, index) => {
        const isNotThisMonth =
          dfs.isBefore(day, start) || dfs.isAfter(day, end);
        const params = {
          class: isNotThisMonth ? ["bg-gray-50 opacity-80 dark:bg-zinc-900"] : [],
          label: "",
          isToday: !1,
          isNotThisMonth,
        };

        if (dfs.dateFns.isFirstDayOfMonth(day)) {
          params.label = dfs.formatByString(day, isMobile ? "MMM d" : "MMM do");
          params.class.push("font-medium");
        } else {
          params.label = dfs.formatByString(day, isMobile ? "d" : "do");
        }

        return {
          day,
          value: day,
          ...params,
          isToday: dfs.dateFns.isToday(day),
        };
      });
    });
  }, [current]);

  const aWeek = [
    {
      value: 0,
      icon: "woman-getting-massage.png",
    },
    {
      value: 1,
      icon: "zombie.png",
    },
    {
      value: 2,
      icon: "hot-beverage.png",
    },
    {
      value: 3,
      icon: "camel.png",
    },
    {
      value: 4,
      icon: "brain.png",
    },
    {
      value: 5,
      icon: "cocktail-glass.png",
    },
    {
      value: 6,
      icon: "party-popper.png",
    },
  ];

  if (locale.options.weekStartsOn === 1) aWeek.push(aWeek.shift());

  aWeek.forEach((i) => {
    i.label = locale.localize.day(i.value, {
      width: isMobile ? "narrow" : "wide",
    });
  });

  const daysChange = (step) => {
    if (!step) {
      setCurrent(new Date());
      return;
    }
    const v = dfs.dateFns.addMonths(current, step);
    setCurrent(v);
  };

  return (
    <div className="w-full mx-auto h-full flex flex-col overflow-hidden rounded-md">
      {/*<Sidebar lang={lang} />*/}

      <div className="w-full h-full flex flex-col justify-between items-center flex-grow relative pl-px ">
        <div className="flex justify-between items-center self-stretch p-4 border-t-0 border-r-0 border-b border-l-0 border-[#dadce0]/60">
          <div className="flex justify-between items-center w-full print:justify-center">
            <span className="text-3xl font-medium md:w-48 text-left whitespace-nowrap">
              {dfs.formatByString(current, "MMM yyyy")}
            </span>
            {/*<Tabs />*/}
            <DaysNav onChange={daysChange} />
          </div>
        </div>

        {/* header */}
        <div className="flex flex-1 justify-start items-start self-stretch border-t-0 border-r-0 border-b border-l-0 border-[#dadce0]">
          {aWeek?.map((item) => (
            <div
              key={item.label}
              className="flex justify-center items-center flex-grow h-6 relative gap-2.5 text-base"
            >
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                {/* <div className="size-4 flex flex-col justify-center" >
                  <img
                    src={`icons/${item.icon}`}
                    className="size-4 hidden object-cover align-middle"
                  />
                </div > */}

                <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left ">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* header */}

        <div className="relative w-full h-full">
          <div className="flex flex-col w-full h-full">
            {weeks.map((week, index) => (
              <div
                className="flex w-full flex-1 flex-grow flex-shrink border-l"
                key={index}
              >
                {week.map((item) => (
                  <div
                    key={item.day}
                    className={cn(
                      `p-1 md:p-2 border-r border-b text-xs flex-1 w-full h-full flex-grow flex-shrink`,
                      item.class.join(" "),
                    )}
                  >
                    <span
                      className={cn(
                        `p-1 md:p-1.5 whitespace-nowrap text-xs`,
                        item.isToday && "bg-violet-500 rounded-full text-white",
                      )}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer lang={lang}>
        {metadata.description.split("\n").map((line, index) => (
          <p key={index} className={"mb-1"}>
            {line}
          </p>
        ))}
      </Footer>
    </div>
  );
}

export default EmojiCalendar;
