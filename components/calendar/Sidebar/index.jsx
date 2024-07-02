import { Nav } from "@/components/Nav";
import Select from '@/components/calendar/Select'
import { Printer } from 'lucide-react';

function App({lang}) {

  return (
    <div className="print:hidden relative flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[250px] border-t-0 border-r border-b-0 border-l-0 border-[#dadce0]" >
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-4 py-2.5" >
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
          <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left " >
            January
          </p >
        </div >
      </div >
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5 p-2.5" >
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0" >
          <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 opacity-70" >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    m
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    t
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    w
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    t
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    f
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    s
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    s
                  </p >
                </div >
              </div >
            </div >
          </div >
          <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0" >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    01
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px] rounded-[99px] bg-[#0c41ff]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-white" >
                    02
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    03
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    04
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    05
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    06
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    07
                  </p >
                </div >
              </div >
            </div >
          </div >
          <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0" >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    08
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    09
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    10
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    11
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    12
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    13
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    14
                  </p >
                </div >
              </div >
            </div >
          </div >
          <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0" >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    15
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    16
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    17
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    18
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    19
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    20
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    21
                  </p >
                </div >
              </div >
            </div >
          </div >
          <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0" >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    22
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    23
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    24
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    25
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    26
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    27
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    28
                  </p >
                </div >
              </div >
            </div >
          </div >
          <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0" >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    29
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    30
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    31
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 opacity-30 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    01
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 opacity-30 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    02
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 opacity-30 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    03
                  </p >
                </div >
              </div >
            </div >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 opacity-30 gap-2.5 p-1" >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]" >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
                    04
                  </p >
                </div >
              </div >
            </div >
          </div >
        </div >
      </div >
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-4 py-2.5" >
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2" >
          <div className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative" >
            <img
              src="icons/spiral-calendar.png"
              className="w-[18px] h-[18px] absolute left-[-1px] top-[-1px] object-cover"
            />
          </div >
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left " >
              Today
            </p >
          </div >
        </div >
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] gap-1 p-0.5 rounded-md" >
          <div className="flex justify-start items-center flex-grow relative gap-0.5" >
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="4.5" cy="4.5" r="4" fill="#8FDCB2" ></circle >
            </svg >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#2c5a41]" >
                Daily Standup
              </p >
            </div >
          </div >
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
            <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
              08:00
            </p >
          </div >
        </div >
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] p-0.5 rounded-md" >
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-0.5" >
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="4.5" cy="4.5" r="4" fill="#BE1A1A" ></circle >
            </svg >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#be1a1a]" >
                Budget Review
              </p >
            </div >
          </div >
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
            <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
              09:00
            </p >
          </div >
        </div >
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] p-0.5 rounded-md" >
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-0.5" >
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="4.5" cy="4.5" r="4" fill="#E7C160" ></circle >
            </svg >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#684d08]" >
                Sasha Jay 121
              </p >
            </div >
          </div >
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
            <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
              10:00
            </p >
          </div >
        </div >
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] p-0.5 rounded-md" >
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-0.5" >
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="4.5" cy="4.5" r="4" fill="#55D28F" ></circle >
            </svg >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#3ba86e]" >
                Web Team Progress Update
              </p >
            </div >
          </div >
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
            <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
              11:00
            </p >
          </div >
        </div >
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] gap-1 p-0.5 rounded-md" >
          <div className="flex justify-start items-center flex-grow relative gap-0.5" >
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="4.5" cy="4.5" r="4" fill="#8FDCB2" ></circle >
            </svg >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#2c5a41]" >
                Social team briefing
              </p >
            </div >
          </div >
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
            <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
              12:00
            </p >
          </div >
        </div >
        <div className="flex-grow-0 flex-shrink-0 w-[63px] h-2 relative overflow-hidden" ></div >
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2" >
          <div className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative" >
            <img
              src="icons/spiral-calendar.png"
              className="w-[18px] h-[18px] absolute left-[-1px] top-[-1px] object-cover"
            />
          </div >
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left " >
              Tomorrow
            </p >
          </div >
        </div >
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] gap-1 p-0.5 rounded-md" >
          <div className="flex justify-start items-center flex-grow relative gap-0.5" >
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="4.5" cy="4.5" r="4" fill="#8FDCB2" ></circle >
            </svg >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#2c5a41]" >
                Daily Standup
              </p >
            </div >
          </div >
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
            <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
              13:00
            </p >
          </div >
        </div >
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] p-0.5 rounded-md" >
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-0.5" >
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="4.5" cy="4.5" r="4" fill="#A384FF" ></circle >
            </svg >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#341d76]" >
                Tech Standup
              </p >
            </div >
          </div >
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
            <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
              14:00
            </p >
          </div >
        </div >
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] p-0.5 rounded-md" >
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-0.5" >
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="4.5" cy="4.5" r="4" fill="#3849E0" ></circle >
            </svg >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#2937b5]" >
                Developer Progress
              </p >
            </div >
          </div >
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
            <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
              15:00
            </p >
          </div >
        </div >
        <div className="flex-grow-0 flex-shrink-0 w-[63px] h-2 relative overflow-hidden" ></div >
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2" >
          <div className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative" >
            <img
              src="icons/airplane.png"
              className="w-[18px] h-[18px] absolute left-[-1px] top-[-1px] object-cover"
            />
          </div >
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left " >
              Vacations
            </p >
          </div >
        </div >
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] gap-1 p-0.5 rounded-md" >
          <div className="flex justify-start items-center flex-grow relative gap-0.5" >
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="4.5" cy="4.5" r="4" fill="#8FDCB2" ></circle >
            </svg >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#2c5a41]" >
                Bahamas
              </p >
            </div >
          </div >
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
            <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left " >
              01-02 to 14-02
            </p >
          </div >
        </div >
      </div >

      <div className="absolute bottom-0 left-0 flex items-center gap-2">
        <Nav />
        <Select lang={lang} />
        <Printer className="cursor-pointer" size={48} absoluteStrokeWidth onClick={window.print} />
      </div>
    </div >
  );
}

export default App;
