"use client";

import { Nav } from "@/components/Nav";
import Select from "@/components/calendar/Select";
import { IoPrintOutline } from "react-icons/io5";

const Footer = ({ children, lang }) => {
  const print = () => {
    return typeof window !== undefined ? window.print() : 0;
  };
  return (
    <div className="w-full py-4 text-center text-xs text-slate-400 flex items-center justify-between print:hidden">
      <div className="flex items-center gap-2">
        <Nav />
        <Select lang={lang} />
      </div>

      <div className="text-center hidden md:block">{children}</div>

      <IoPrintOutline
        className="cursor-pointer size-7 md:size-10"
        onClick={print}
      />
    </div>
  );
};

export default Footer;
