import {isMobile} from "react-device-detect";

const YearView = ({ dfs, current }) => {

  const year = current.getFullYear();
  const months = new Array(12).fill(0).map((_, v) => {
    return {
      value: v + 1,
      label: v + 1,
      weeks: dfs.getWeekArray(new Date(year, v)),
    }
  });

  console.log('------months', months);
  return (
    <div className="flex justify-start items-start flex-wrap w-full h-full p-6" >
      {
        months.map(({ label, weeks }) => (
          <AMonth key={label} />
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


const AMonth = () => (
  <div className="flex flex-col justify-center items-center self-stretch flex-grow gap-1 p-5 bg-white">
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
          <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
            01
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
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  01
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px] rounded-[99px] bg-[#0c41ff]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-white">
                  02
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  03
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  04
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  05
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  06
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  07
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  08
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  09
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  10
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  11
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  12
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  13
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  14
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  15
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  16
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  17
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  18
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  19
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  20
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  21
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  22
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  23
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  24
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  25
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  26
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  27
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  28
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  29
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  30
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  31
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 opacity-30 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  01
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 opacity-30 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  02
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 opacity-30 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  03
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 opacity-30 gap-2.5 p-1">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#333]">
                  04
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)