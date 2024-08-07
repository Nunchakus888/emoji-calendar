export const CopyRight = ({ copyright, contactUs }) => {
  return (
    <div className="flex items-center text-gray-300 text-xs w-full justify-center pb-2 gap-2 print:hidden">
      © {copyright}
      <a className="z-10" target="_blank" href="https://x.com/X_CalendarPrint">
        {contactUs}
      </a>
    </div>
  )
}


export const FooterDescription = async ({ lang }) => {
  const { footer, ...rest } = await import(`@/services/i18n/${lang}.json`).catch(() => import(`@/services/i18n/0.json`));

  return (
    <div className="w-full absolute -z-0 bottom-0 text-center text-xs text-slate-400 flex flex-col gap-1 items-center justify-between print:hidden">
      <div className="text-center hidden md:block">
        {
          footer.split("\n").map((line, index) => (
            <p key={index} className={"mb-1"}>
              {line}
            </p>
          ))
        }
      </div>
      
      <CopyRight {...rest} />
    </div>
  );
};
