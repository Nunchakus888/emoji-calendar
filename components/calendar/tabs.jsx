'use client';

import { Button } from "flowbite-react";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";

const Tabs = () => {
  /*const now = new Date();
  const weeks = dfs.getWeekArray(now, { weekStartsOn: 0 });
  const year = dfs.getYear(now);
  const month = dfs.getMonth(now) + 1;*/


  const change = (v) => {
    console.log("----change", v);
    // setWeekStartsOn(weekStartsOn === 0 ? 1 : 0);
  };

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group" >
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" >
        Week
      </button >
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" >
        Month
      </button >
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" >
        Year
      </button >
    </div >
  )
}


const NavTabs = () => {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group" >

      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent rounded-s-lg hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:z-10  focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" >
        <SlArrowLeft type="button" className="h-3 w-3" aria-hidden="true" />
      </button >

      <button type="button" className="px-2 py-2 text-sm font-medium text-gray-900 bg-transparent border-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:z-10  focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" >
        Today
      </button >

      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent rounded-e-lg hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:z-10  focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" >
        <SlArrowRight className="h-3 w-3" aria-hidden="true" />
      </button >
    </div >
  )
}

export {
  Tabs,
  NavTabs,
}
