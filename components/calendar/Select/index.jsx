"use client";
import * as locales from "date-fns/locale";
import { IoEarth } from "react-icons/io5";

function App({ lang }) {
  const change = (e) => {
    const [_, lang, mmYYYY] = location.pathname.match(
      /^\/([\w-]+)[\/]*([\d{2}[\/-]*[\d]{4})*/,
    );

    const newUrl = new URL(location.href);
    newUrl.pathname = `/${e.target.value}/${mmYYYY || ""}`;

    location.href = newUrl.href;
  };

  return (
    <div className="relative flex items-center">
      <IoEarth className="size-5 absolute m-auto right-0 -z-10 cursor-pointer" />
      <select
        onChange={change}
        className="block cursor-pointer py-2.5 px-0 w-24 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option defaultValue={lang}>{lang}</option>
        {Object.keys(locales).map((k) => {
          const code = locales[k].code;
          return (
            <option key={code} value={code}>
              {code}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default App;
