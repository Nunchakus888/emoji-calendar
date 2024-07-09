'use client';

import * as locales from 'date-fns/locale';

function App({ lang }) {
  const now = new Date();

  const change = (e) => {
    console.log(e.target.value);
    location.href = e.target.value;
  };

  return (
    <select onChange={change} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 dark:bg-gray-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-h-80 overflow-y-auto">
      <option value={lang}>{ lang }</option >
      {
        Object.keys(locales).map(k => {
          const code = locales[k].code;
          return (
            <option key={code} value={code} >
              {
                code
              }
            </option >
          )
        })
      }
    </select >
  );
}

export default App;
