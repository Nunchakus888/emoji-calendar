const Footer = ({ children }) => {
	return (
		<div className="mx-auto w-2/3 p-4 text-center text-xs text-slate-400 print:hidden">
			{
				children
			}
		</div>
	)
}


export default Footer;