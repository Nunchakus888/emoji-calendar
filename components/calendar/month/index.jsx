import { cn } from "@/utils";

export const MONTHS = new Array(12).fill(0).map((_, index) => index);

const MonthView = ({ aWeek, weeks }) => {
  return (
    <>
      <div className="flex flex-1 justify-start items-start self-stretch border-t-0 border-r-0 border-b border-l-0 border-[#dadce0]">
        {aWeek?.map((item) => (
          <div
            key={item.label}
            className="flex justify-center items-center flex-grow h-6 relative gap-2.5 text-base"
          >
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
              {/* <div className="size-4 flex flex-col justify-center" >
                  <img
                    src={`icons/${item.icon}`}
                    className="size-4 hidden object-cover align-middle"
                  />
                </div > */}

              <div className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left ">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full h-full">
        <div className="flex flex-col w-full h-full">
          {weeks.map((week, index) => (
            <div
              className="flex w-full flex-1 flex-grow flex-shrink border-l"
              key={index}
            >
              {week.map((item) => (
                <div
                  key={item.day}
                  className={cn(
                    `p-1 md:p-2 border-r border-b text-xs flex-1 w-full h-full flex-grow flex-shrink`,
                    item.class.join(" "),
                  )}
                >
                    <span
                      className={cn(
                        `p-1 md:p-1.5 whitespace-nowrap text-xs`,
                        item.isToday && "bg-violet-500 rounded-full text-white",
                      )}
                    >
                      {item.label}
                    </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MonthView