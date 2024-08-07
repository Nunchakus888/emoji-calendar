'use client';

import { Nav } from "@/components/Nav";
import Select from "@/components/calendar/Select";


const Footer = ({ lang }) => {
  return (
    <div className="w-full text-center text-xs text-slate-400 flex items-center justify-between print:hidden">
      <div className="flex items-center gap-2">
        <Nav />
        <Select lang={lang} />
      </div>
    </div>
  );
};

export default Footer;
