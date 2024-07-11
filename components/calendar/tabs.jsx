"use client";
import { MdOutlineToday, MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

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
};

const Tabs = () => {
  return (
    <div className="rounded-md shadow-sm" role="group">
      <button
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

const DaysNav = ({ onChange }) => {
  return (
    <div className="flex items-center gap-4 px-2 cursor-pointer select-none print:hidden">
      {operationsMap.daysNav.map(({ label: Label, value }) => (
        <span
          key={value}
          className="hover:text-blue-600"
          onClick={() => onChange(value)}
        >
         <Label className="size-5" />
        </span>
      ))}
    </div>
  );
};

export { Tabs, DaysNav };
