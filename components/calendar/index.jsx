'use client';

import { useMemo, useState } from 'react';
import { AdapterDateFns } from "./DateFnsAdapter";

import {Tabs, DaysNav} from './tabs';
import Sidebar from './Sidebar';
import * as localeMap from 'date-fns/locale';

import { cn } from "@/utils";

import Footer from "@/components/Footer";
import { metadata } from "@/utils/config"


function EmojiCalendar({ lang }) {
  const locale = localeMap[lang.replace(/-(\w){1}/, (_, letter) => letter.toUpperCase())];

  const dfs = useMemo(() => new AdapterDateFns({ locale }), [locale]);

  const [current, setCurrent] = useState(new Date());

  const weeks = useMemo(() => {
    return dfs.getWeekArray(current).map(weeks => {
      return weeks.map(day => {
        let label = '';
        const params = {
          class: '',
          label: '',
          isToday: !1,
        }

        if (dfs.dateFns.isFirstDayOfMonth(day)) {
          params.label = dfs.formatByString(day, 'MMM do');
          params.class = 'font-medium';
        } else {
          params.label = dfs.formatByString(day, 'do ');
        }

        if (dfs.dateFns.isToday(day)) {
          params.isToday = !0;
          params.class += 'bg-slate-50 dark:bg-zinc-800 ';
        }
        return {
          day,
          value: day,
          ...params,
          isToday: dfs.dateFns.isToday(day),
        }
      })
    })
  }, [current]);

  const aWeek = [
    {
      value: 0,
      icon: 'woman-getting-massage.png',
    },
    {
      value: 1,
      icon: 'zombie.png',
    },
    {
      value: 2,
      icon: 'hot-beverage.png',
    },
    {
      value: 3,
      icon: 'camel.png',
    },
    {
      value: 4,
      icon: 'brain.png',
    },
    {
      value: 5,
      icon: 'cocktail-glass.png',
    },
    {
      value: 6,
      icon: 'party-popper.png',
    },
  ];

  if (locale.options.weekStartsOn === 1) aWeek.push(aWeek.shift());

  aWeek.forEach(i => {
    i.label = locale.localize.day(i.value);
  });

  const daysChange = (step) => {
    console.log('====e', step);
    if (!step) {
      setCurrent(new Date());
      return;
    }
    const v = dfs.dateFns.addMonths(current, step);
    setCurrent(v);
  }

  return (
    <div className="w-full mx-auto h-full flex overflow-hidden rounded-md border border-[#9d9e9f]/60">
      {/*<Sidebar lang={lang} />*/}

      <div className="w-full h-full flex flex-col justify-between items-center flex-grow relative pl-px ">
        <div className="flex justify-between items-center self-stretch p-4 border-t-0 border-r-0 border-b border-l-0 border-[#dadce0]/60" >
          <div className="flex justify-start items-center gap-4 print:hidden" >
            <div className="flex justify-start items-start" >
              <div className="flex justify-center items-center w-[35px] h-[35px] relative gap-1 p-2 rounded-[999px]" >
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                  preserveAspectRatio="none"
                >
                  {" "} <path
                  d="M1.80944 4.80951H14.1904C14.4534 4.80951 14.6666 4.59633 14.6666 4.33332V3.14285C14.6666 2.87984 14.4534 2.66666 14.1904 2.66666H1.80944C1.54644 2.66666 1.33325 2.87984 1.33325 3.14285V4.33332C1.33325 4.59633 1.54644 4.80951 1.80944 4.80951ZM1.80944 9.57142H14.1904C14.4534 9.57142 14.6666 9.35823 14.6666 9.09523V7.90475C14.6666 7.64175 14.4534 7.42856 14.1904 7.42856H1.80944C1.54644 7.42856 1.33325 7.64175 1.33325 7.90475V9.09523C1.33325 9.35823 1.54644 9.57142 1.80944 9.57142ZM1.80944 14.3333H14.1904C14.4534 14.3333 14.6666 14.1201 14.6666 13.8571V12.6667C14.6666 12.4037 14.4534 12.1905 14.1904 12.1905H1.80944C1.54644 12.1905 1.33325 12.4037 1.33325 12.6667V13.8571C1.33325 14.1201 1.54644 14.3333 1.80944 14.3333Z"
                  fill="#333333"
                ></path >{" "}
                </svg >
              </div >
            </div >
          </div >

          <div className="flex justify-between items-center w-full" >
              <span className="text-3xl font-medium w-48 text-left" >
                {dfs.formatByString(current, 'MMM yyyy')}
              </span >
            {/*<Tabs />*/}
            <DaysNav onChange={daysChange} />
          </div >
        </div >

        {/* header */}
        <div className="flex flex-1 justify-start items-start self-stretch border-t-0 border-r-0 border-b border-l-0 border-[#dadce0]" >
          {
            aWeek?.map((item) => (
              <div key={item.label} className="flex justify-center items-center flex-grow h-6 relative gap-2.5 px-2.5" >
                <div className="flex-grow-0 flex-shrink-0 w-[15px] h-[15px] relative" >
                  <img
                    src={`icons/${item.icon}`}
                    className="w-[15px] h-[15px] absolute left-[-1px] top-[-1px] object-cover"
                  />
                </div >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left " >
                    {
                      item.label
                    }
                  </p >
                </div >
              </div >
            ))
          }
        </div>
        {/* header */}

        <div className="relative w-full h-full">
          <div className="flex flex-col w-full h-full">
            {weeks.map((week, index) => (
              <div
                className="flex w-full flex-1 flex-grow flex-shrink"
                key={index}
              >
                {week.map((item) => (
                  <div
                    key={item.day}
                    className={
                      cn(`gap-2.5 px-1 py-[3px] border border-[#dadce0]/60 text-xs flex-1 w-full h-full flex-grow flex-shrink`,item.class)
                    }
                  >
                    <div className="gap-2.5 p-2 md:size-24" >
                      {item.label}
                    </div >
                  </div >
                ))}
              </div >
            ))}
          </div >
        </div >
      </div >

      <Footer lang={locale}>
        {
          metadata.description.split("\n").map((line, index) => (
            <p key={index} className={"mb-1"}>
              {line}
            </p>
          ))
        }
      </Footer>
    </div>
  );
}

export default EmojiCalendar;
