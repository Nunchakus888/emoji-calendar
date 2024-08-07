'use client';

import { Nav } from "@/components/Nav";
import Select from "@/components/calendar/Select";


const Footer = ({ lang }) => {
  return (
    <div className="w-full text-xs text-slate-400 flex items-center justify-between pt-3 pb-5 print:hidden">
      <Select lang={lang} />
      <Nav />
    </div>
  );
};

export default Footer;
