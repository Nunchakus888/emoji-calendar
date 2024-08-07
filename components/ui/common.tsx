import { getLocale } from "@/utils";
import { IoPrintOutline } from "react-icons/io5";

export const FooterDscription = async ({ locale }) => {
    const lang = getLocale(locale);
    const { description } = await import(`@/services/i18n/${lang}.json`).catch(() => import(`@/services/i18n/0.json`));
  
    return (
      <div className="flex w-full items-center flex-col gap-2">
        <div className="text-center hidden md:block">
          {
            description.split("\n").map((line, index) => (
              <p key={index} className={"mb-1"}>
                {line}
              </p>
            ))
          }
        </div>
  
        <div className="flex items-center text-gray-300 text-xs w-full justify-center pb-2 gap-2">
            © 2024 x-calendar. All rights reserved.
            <a href="https://x.com/X_CalendarPrint">
              Contact Us
            </a>
          </div>
      </div>
    );
  };


export const Print = () => {
  const print = () => {
    return typeof window !== undefined ? window.print() : 0;
  };

  return (
    <IoPrintOutline
      className="cursor-pointer size-7 print:hidden"
      onClick={print}
    />
  )
}