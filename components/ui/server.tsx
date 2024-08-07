import { getLocale } from "@/utils";

export const CopyRight = () => {
  return (
    <div className="flex items-center text-gray-300 text-xs w-full justify-center pb-2 gap-2 print:hidden">
      © 2024 x-calendar. All rights reserved.
      <a href="https://x.com/X_CalendarPrint">
        Contact Us
      </a>
    </div>
  )
}


export const FooterDscription = async ({ locale }) => {
  const lang = getLocale(locale);
  const { description } = await import(`@/services/i18n/${lang}.json`).catch(() => import(`@/services/i18n/0.json`));

  return (
    <div className="w-full text-center text-xs text-slate-400 flex items-center justify-between print:hidden">
      <div className="text-center hidden md:block">
        {
          description.split("\n").map((line, index) => (
            <p key={index} className={"mb-1"}>
              {line}
            </p>
          ))
        }
      </div>
    </div>
  );
};
