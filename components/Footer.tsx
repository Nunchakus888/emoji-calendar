'use client';

import { Nav } from "@/components/Nav";
import Select from '@/components/calendar/Select'
import { Printer } from 'lucide-react';
const Footer = ({ children, lang }) => {
	return (
		<div className="w-full py-4 text-center text-xs text-slate-400 flex items-center justify-between print:hidden">
			<Printer className="cursor-pointer" size={24} absoluteStrokeWidth onClick={window.print} />
			
			<div className="text-center">
				{
					children
				}
			</div>
			
			<div className="flex items-center gap-2">
				<Select lang={lang} />
				<Nav />
			</div>
			
		</div>
	)
}


export default Footer;