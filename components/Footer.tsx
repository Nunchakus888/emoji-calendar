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
      <IoPrintOutline
        className="cursor-pointer size-5"
        onClick={print}
      />

      <div className="text-center hidden md:block">{children}</div>

      <div className="flex items-center gap-2">
        <Select lang={lang} />
        <Nav />
      </div>
    </div>
  );
};

export default Footer;
