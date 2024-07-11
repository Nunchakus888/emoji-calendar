"use client";
import * as locales from "date-fns/locale";
import { IoEarth } from "react-icons/io5";

function App({ lang }) {
  const now = new Date();

  const change = (e) => {
    console.log(e.target.value);
    location.href = e.target.value;
  };

  return (
    <div className="relative flex items-center">
      <IoEarth className="size-5 absolute m-auto right-0 -z-10" />
      <select onChange={change} className="block py-2.5 px-0 w-24 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" >
        <label htmlFor="underline_select" className="sr-only" >🌍</label >
        <option defaultValue={lang} >{lang}</option >
        {Object.keys(locales).map((k) => {
          const code = locales[k].code;
          return (
            <option key={code} value={code} >
              {code}
            </option >
          );
        })}
      </select >
    </div>
  );
}

export default App;
