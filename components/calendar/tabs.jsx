'use client';
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";

// todo replace icons to https://lucide.dev/icons/chevron-left;

const operationsMap = {
  daysNav: [
    {
      label: <SlArrowLeft type="button" className="h-3 w-3" aria-hidden="true" />,
      value: -1,
    },
    {
      label: 'Today',
      value: 0,
    },
    {
      label: <SlArrowRight className="h-3 w-3" aria-hidden="true" />,
      value: 1,
    },
  ]
}


const Tabs = () => {

  return (
    <div className="rounded-md shadow-sm" role="group" >
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" >
        Week
      </button >
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" >
        Month
      </button >
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" >
        Year
      </button >
    </div >
  )
}


const DaysNav = ({ onChange }) => {
  return (
    <div className="flex items-center gap-4 px-2 cursor-pointer select-none print:hidden" >
      {
        operationsMap.daysNav.map(({ label, value }) => (
          <span key={value} className="hover:text-blue-600" onClick={() => onChange(value)}>
            {
              label
            }
          </span>
        ))
      }
    </div >
  )
}

export {
  Tabs,
  DaysNav,
}
