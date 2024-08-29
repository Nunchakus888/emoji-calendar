import {isMobile} from "react-device-detect";

const YearView = ({ dfs, current, weeks }) => {

  console.log('------months', weeks, current);
  return (
    <div className="flex justify-start items-start flex-wrap w-full h-full" >
      {
        weeks.map((aMonth, index) => (
          <AMonth key={index} aMonth={aMonth} index={index + 1} />
          /*<div key={label} className="flex flex-col justify-center items-center self-stretch flex-grow gap-1 p-5 bg-white" >
            <div className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]" >{label}</div >

            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5 p-2.5" >
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0" >
                <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 opacity-70 text-[#333]" >
                  <div className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left" >m</div >
                  <div className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left" >t</div >
                  <div className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left" >w</div >
                  <div className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left" >t</div >
                  <div className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left" >f</div >
                  <div className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left" >s</div >
                  <div className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left" >s</div >
                </div >

                {
                  weeks.map((w, row) => (
                    <div key={row} className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 opacity-70 text-[#333]" >
                      {
                        w.map((d, i) => (
                          <div key={i} className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]" >
                            {
                              dfs.formatByString(d, 'MMM do')
                            }
                          </div >
                        ))
                      }
                    </div >
                  ))
                }
              </div >
            </div >
          </div >*/
        ))
      }
    </div >
  )
}


export default YearView;


const AMonth = ({ index, aMonth }) => (
  <div className="flex flex-col justify-center items-center self-stretch flex-grow gap-1 p-5 bg-white">
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
          <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
            { index }
          </p>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5 p-2.5">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 opacity-70">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  m
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  t
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  w
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  t
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  f
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  s
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  s
                </p>
              </div>
            </div>
          </div>
        </div>
        {
          aMonth.map((aWeek, iw) => (
            <div key={iw} className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0">
              {
                aWeek.map((day) => (
                  <div key={day.day} className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                        <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                          {day.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  </div>
)