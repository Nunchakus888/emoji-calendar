"use client";
import {
  MdOutlineToday,
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
} from "react-icons/md";

// todo replace icons to https://lucide.dev/icons/chevron-left;

const operationsMap = {
  daysNav: [
    {
      label: MdOutlineChevronLeft,
      value: -1,
    },
    {
      label: MdOutlineToday,
      value: 0,
    },
    {
      label: MdOutlineChevronRight,
      value: 1,
    },
  ],
  viewList: [
    {
      label: "Month",
      value: "month",
    },
    {
      label: "Year",
      value: "year",
    },
    {
      label: "Week",
      value: "week",
    },
  ],
};


const Tabs = ({ onChange }) => {
  return (
    <div className="rounded-md shadow-sm" role="group">
      <button
        onClick={() => onChange()}
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
      >
        Week
      </button>
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
      >
        Month
      </button>
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
      >
        Year
      </button>
    </div>
  );
};

const DaysNav = ({ onChange, current }) => {
  return (
    <div className="flex items-center gap-4" >
      <div className="text-3xl font-medium md:w-48 text-left whitespace-nowrap" >
        {current}
      </div >

      <div className="flex items-center gap-4 px-2 cursor-pointer select-none print:hidden" >
        {operationsMap.daysNav.map(({label: Label, value}) => (
          <span
            key={value}
            className="hover:text-blue-600"
            onClick={() => onChange(value)}
          >
            <Label className="size-5" />
          </span >
        ))}
      </div >
    </div >
  );
};

const ViewSwitchSelector = ({selected = operationsMap.viewList[0].value, onChange}) => {
  return (
    <select defaultValue={selected} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      {
        operationsMap.viewList.map(({label, value}) => (
          <option key={value} value={value}>{label}</option>
        ))
      }
  </select>
  )
};

export {Tabs, DaysNav, ViewSwitchSelector};
