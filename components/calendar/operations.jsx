'use client';

import {Button} from "flowbite-react";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";

import {AdapterDateFns} from "./DateFnsAdapter";
import localeUS from "date-fns/locale/en-US";
import locale from "date-fns/locale/zh-CN";


function Operations() {
  const dfs = new AdapterDateFns({locale});

  const now = new Date();
  const weeks = dfs.getWeekArray(now, {weekStartsOn: 0});
  const year = dfs.getYear(now);
  const month = dfs.getMonth(now) + 1;

  console.log("----locale", locale);
  console.log("----localeUS", localeUS);

  const switchWeekStartOn = () => {
    console.log("----click", weeks);
    // setWeekStartsOn(weekStartsOn === 0 ? 1 : 0);
  };

  return (
    <Button.Group > <Button outline={false} > <SlArrowLeft /> </Button > <Button outline={false} >today</Button >
      <Button outline={false} > <SlArrowRight /> </Button > </Button.Group >
  );
}

function NavGroup() {
  return (
    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination" >
      <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" >
        <span className="sr-only" >Previous</span > <SlArrowLeft className="h-5 w-5" aria-hidden="true" />
      </a >
      <a href="#" aria-current="page" className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" >
      Today
      </a >
      <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" >
        <span className="sr-only" >Next</span >
        <SlArrowRight className="h-5 w-5" aria-hidden="true" />
      </a >
    </nav >

  )
}


export {
  Operations,
  NavGroup
};


