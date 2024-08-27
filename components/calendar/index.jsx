"use client";

import {useEffect, useMemo, useState} from "react";
import { AdapterDateFns } from "./DateFnsAdapter";
import { usePathname } from "next/navigation";

import { Tabs, DaysNav, ViewSwitchSelector } from "./tabs";
import * as localeMap from "date-fns/locale";

import { cn, MonthMatcher, pathOfDate } from "@/utils";

import { isMobile } from "react-device-detect";
import Footer from "../Footer";
import {Print} from '@/components/ui/common';
import YearView from "./year";
import MonthView from './month';


function EmojiCalendar({ lang }) {
  const pathname = usePathname();

  const locale = localeMap[lang.replace(/-(\w){1}/, (_, letter) => letter.toUpperCase())];

  const dfs = useMemo(() => new AdapterDateFns({ locale }), [locale]);

  const my = MonthMatcher(pathname);

  const [current, setCurrent] = useState(my ? new Date(my[0], (my[1] || 1) - 1) : new Date());

  const [view, setView] = useState("month");

  useEffect(() => {
    pathOfDate(`/${lang}/${dfs.formatByString(current, "MM/yyyy")}`);
  }, [current]);

  const weeks = useMemo(() => {
    const start = dfs.startOfMonth(current);
    const end = dfs.endOfMonth(current);

    return dfs.getWeekArray(current).map((weeks) => {
      return weeks.map((day, index) => {
        const isNotThisMonth =
          dfs.isBefore(day, start) || dfs.isAfter(day, end);
        const params = {
          class: isNotThisMonth
            ? ["bg-gray-50 opacity-80 dark:bg-zinc-900"]
            : [],
          label: "",
          isToday: !1,
          isNotThisMonth,
        };

        if (dfs.dateFns.isFirstDayOfMonth(day)) {
          params.label = dfs.formatByString(day, isMobile ? "d" : "MMM do");
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

  const viewChange = (view) => {
    setView(view);

    // if (view === "month") {
    //   pathOfDate(`/${lang}/${dfs.formatByString(current, "MM/yyyy")}`);
    // } else if (view === "week") {
    //   pathOfDate(`/${lang}/${dfs.formatByString(current, "MM/yyyy")}/week`);
    // } else if (view === "year") {
    //   pathOfDate(`/${lang}/${dfs.formatByString(current, "yyyy")}`);
    // }
  }

  return (
    <div className="w-full mx-auto h-full flex flex-col overflow-hidden rounded-md">
      {/*<Sidebar lang={lang} />*/}

      <div className="w-full h-full flex flex-col justify-between items-center flex-grow relative pl-px ">
        <div className="flex justify-between items-center self-stretch py-4 px-2 border-t-0 border-r-0 border-b border-l-0 border-[#dadce0]/60">
          <div className="flex justify-between items-center w-full print:justify-center">
            <DaysNav onChange={daysChange} current={dfs.formatByString(current, "MMM yyyy")} />

            <ViewSwitchSelector selected={view} onChange={viewChange} />

            <Print />
          </div>
        </div>

        {
          view === "month" && <MonthView aWeek={aWeek} weeks={weeks} />
        }
        
        {
          view === "year" && <YearView dfs={dfs} current={current} />
        }
      </div>

      <Footer lang={lang} />
    </div>
  );
}

export default EmojiCalendar;
