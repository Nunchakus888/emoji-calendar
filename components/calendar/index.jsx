import { AdapterDateFns } from "./DateFnsAdapter";
import locale from "date-fns/locale/en-US";
// import locale from "date-fns/locale/zh-CN";
import Operations from './operations';

function EmojiCalendar() {
  // const [locale] = useState(defaultLocale);
  // const dfs = useMemo(() => new AdapterDateFns({locale}), [locale])
  //
  // const [weekStartsOn, setWeekStartsOn] = useState(0);
  // const weeks = useMemo(() => dfs.getWeekArray(new Date(), {weekStartsOn}), [weekStartsOn]);
  const dfs = new AdapterDateFns({ locale });
  const now = new Date();
  const weeks = dfs.getWeekArray(now);
  const year = dfs.getYear(now);
  const month = dfs.getMonth(now) + 1;
  const v = dfs.format(now, 'normalDate');
  console.log('---v', v, dfs.format(now, 'year'));
  const switchWeekStartOn = () => {
    console.log("----click", weeks);
    // setWeekStartsOn(weekStartsOn === 0 ? 1 : 0);
  };
  const aWeek = [
    {
      value: 0,
      icon: 'woman-getting-massage.png',
    },
    {
      value: 1,
      icon: 'zombie.png',
    },
    {
      value: 2,
      icon: 'hot-beverage.png',
    },
    {
      value: 3,
      icon: 'camel.png',
    },
    {
      value: 4,
      icon: 'brain.png',
    },
    {
      value: 5,
      icon: 'cocktail-glass.png',
    },
    {
      value: 6,
      icon: 'party-popper.png',
    },
  ].map(i => ({...i, label: locale.localize.day(i.value)}));

  return (
    <div className="flex justify-start items-start w-[1465px] overflow-hidden rounded-md border border-[#9d9e9f]/60">
      {/*left sidebar*/}
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[250px] border-t-0 border-r border-b-0 border-l-0 border-[#dadce0]">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-4 py-2.5">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left ">
              January
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5 p-2.5">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 opacity-70">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      m
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      t
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      w
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      t
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      f
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      s
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[26px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
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
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
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
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      03
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      04
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      05
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      06
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
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
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      08
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      09
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      10
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      11
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      12
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      13
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
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
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      15
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      16
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      17
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      18
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      19
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      20
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
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
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      22
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      23
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      24
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      25
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      26
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      27
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
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
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      29
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      30
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      31
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 opacity-30 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      01
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 opacity-30 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      02
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 opacity-30 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      03
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 opacity-30 gap-2.5 p-1">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                      04
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-4 py-2.5">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <div className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative">
              <img
                src="icons/spiral-calendar.png"
                className="w-[18px] h-[18px] absolute left-[-1px] top-[-1px] object-cover"
              />
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left ">
                Today
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] gap-1 p-0.5 rounded-md">
            <div className="flex justify-start items-center flex-grow relative gap-0.5">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="4.5" cy="4.5" r="4" fill="#8FDCB2"></circle>
              </svg>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#2c5a41]">
                  Daily Standup
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                08:00
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] p-0.5 rounded-md">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="4.5" cy="4.5" r="4" fill="#BE1A1A"></circle>
              </svg>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#be1a1a]">
                  Budget Review
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                09:00
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] p-0.5 rounded-md">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="4.5" cy="4.5" r="4" fill="#E7C160"></circle>
              </svg>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#684d08]">
                  Sasha Jay 121
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                10:00
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] p-0.5 rounded-md">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="4.5" cy="4.5" r="4" fill="#55D28F"></circle>
              </svg>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#3ba86e]">
                  Web Team Progress Update
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                11:00
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] gap-1 p-0.5 rounded-md">
            <div className="flex justify-start items-center flex-grow relative gap-0.5">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="4.5" cy="4.5" r="4" fill="#8FDCB2"></circle>
              </svg>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#2c5a41]">
                  Social team briefing
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                12:00
              </p>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[63px] h-2 relative overflow-hidden"></div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <div className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative">
              <img
                src="icons/spiral-calendar.png"
                className="w-[18px] h-[18px] absolute left-[-1px] top-[-1px] object-cover"
              />
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left ">
                Tomorrow
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] gap-1 p-0.5 rounded-md">
            <div className="flex justify-start items-center flex-grow relative gap-0.5">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="4.5" cy="4.5" r="4" fill="#8FDCB2"></circle>
              </svg>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#2c5a41]">
                  Daily Standup
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                13:00
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] p-0.5 rounded-md">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="4.5" cy="4.5" r="4" fill="#A384FF"></circle>
              </svg>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#341d76]">
                  Tech Standup
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                14:00
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] p-0.5 rounded-md">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="4.5" cy="4.5" r="4" fill="#3849E0"></circle>
              </svg>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#2937b5]">
                  Developer Progress
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                15:00
              </p>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[63px] h-2 relative overflow-hidden"></div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <div className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative">
              <img
                src="icons/airplane.png"
                className="w-[18px] h-[18px] absolute left-[-1px] top-[-1px] object-cover"
              />
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left ">
                Vacations
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[19px] gap-1 p-0.5 rounded-md">
            <div className="flex justify-start items-center flex-grow relative gap-0.5">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="4.5" cy="4.5" r="4" fill="#8FDCB2"></circle>
              </svg>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#2c5a41]">
                  Bahamas
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                01-02 to 14-02
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*left sidebar*/}

      <div className="flex flex-col justify-center items-center flex-grow h-[1024px] relative pl-px">
        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 p-4 border-t-0 border-r-0 border-b border-l-0 border-[#dadce0]/60">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-4">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[35px] h-[35px] relative gap-1 p-2 rounded-[999px]">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                  preserveAspectRatio="none"
                >
                  {" "}
                  <path
                    d="M1.80944 4.80951H14.1904C14.4534 4.80951 14.6666 4.59633 14.6666 4.33332V3.14285C14.6666 2.87984 14.4534 2.66666 14.1904 2.66666H1.80944C1.54644 2.66666 1.33325 2.87984 1.33325 3.14285V4.33332C1.33325 4.59633 1.54644 4.80951 1.80944 4.80951ZM1.80944 9.57142H14.1904C14.4534 9.57142 14.6666 9.35823 14.6666 9.09523V7.90475C14.6666 7.64175 14.4534 7.42856 14.1904 7.42856H1.80944C1.54644 7.42856 1.33325 7.64175 1.33325 7.90475V9.09523C1.33325 9.35823 1.54644 9.57142 1.80944 9.57142ZM1.80944 14.3333H14.1904C14.4534 14.3333 14.6666 14.1201 14.6666 13.8571V12.6667C14.6666 12.4037 14.4534 12.1905 14.1904 12.1905H1.80944C1.54644 12.1905 1.33325 12.4037 1.33325 12.6667V13.8571C1.33325 14.1201 1.54644 14.3333 1.80944 14.3333Z"
                    fill="#333333"
                  ></path>{" "}
                </svg>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-3xl text-left ">
                <span className="flex-grow-0 flex-shrink-0 text-3xl font-medium text-left ">
                  {month}{" "}
                </span>{" "}
                <span className="flex-grow-0 flex-shrink-0 text-3xl text-left ">
                  {year}
                </span>
              </p>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[35px] relative gap-1 p-2 rounded-[3px] border border-[#0c41ff]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#0c41ff]">
                  Month
                </p>
              </div>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="none"
              >
                {" "}
                <path
                  d="M7.98176 12.3312L2.04789 6.39727C1.76171 6.11108 1.76171 5.6471 2.04789 5.36095L2.73998 4.66886C3.02568 4.38316 3.48871 4.38261 3.77508 4.66763L8.49993 9.37035L13.2248 4.66763C13.5111 4.38261 13.9742 4.38316 14.2599 4.66886L14.9519 5.36095C15.2381 5.64713 15.2381 6.11111 14.9519 6.39727L9.01811 12.3312C8.73192 12.6173 8.26794 12.6173 7.98176 12.3312Z"
                  fill="#0C41FF"
                ></path>{" "}
              </svg>
            </div>
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-4">
            <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-8 h-8 relative p-2 rounded-[999px] bg-neutral-100">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="none"
              >
                {" "}
                <path
                  d="M14.9842 13.3609L12.3881 10.7648C12.271 10.6476 12.1121 10.5825 11.9455 10.5825H11.521C12.2397 9.66331 12.6667 8.50717 12.6667 7.24948C12.6667 4.25759 10.2425 1.83334 7.25061 1.83334C4.25871 1.83334 1.83447 4.25759 1.83447 7.24948C1.83447 10.2414 4.25871 12.6656 7.25061 12.6656C8.5083 12.6656 9.66444 12.2386 10.5836 11.5199V11.9443C10.5836 12.111 10.6487 12.2698 10.7659 12.387L13.362 14.9831C13.6068 15.2279 14.0026 15.2279 14.2447 14.9831L14.9816 14.2462C15.2264 14.0014 15.2264 13.6056 14.9842 13.3609ZM7.25061 10.5825C5.40964 10.5825 3.9176 9.09305 3.9176 7.24948C3.9176 5.40852 5.40704 3.91647 7.25061 3.91647C9.09158 3.91647 10.5836 5.40591 10.5836 7.24948C10.5836 9.09045 9.09418 10.5825 7.25061 10.5825Z"
                  fill="#6A778B"
                ></path>{" "}
              </svg>
            </div>
            <Operations />

            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[35px] relative gap-1 p-2 rounded-[3px] bg-[#0c41ff]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-white">
                  Add event
                </p>
              </div>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="none"
              >
                {" "}
                <path
                  d="M8.49992 1.83334C4.81712 1.83334 1.83325 4.81721 1.83325 8.50001C1.83325 12.1828 4.81712 15.1667 8.49992 15.1667C12.1827 15.1667 15.1666 12.1828 15.1666 8.50001C15.1666 4.81721 12.1827 1.83334 8.49992 1.83334ZM12.3709 9.2527C12.3709 9.43012 12.2257 9.57528 12.0483 9.57528H9.57519V12.0484C9.57519 12.2258 9.43003 12.371 9.25261 12.371H7.74723C7.56981 12.371 7.42465 12.2258 7.42465 12.0484V9.57528H4.95153C4.77411 9.57528 4.62895 9.43012 4.62895 9.2527V7.74732C4.62895 7.5699 4.77411 7.42474 4.95153 7.42474H7.42465V4.95162C7.42465 4.7742 7.56981 4.62904 7.74723 4.62904H9.25261C9.43003 4.62904 9.57519 4.7742 9.57519 4.95162V7.42474H12.0483C12.2257 7.42474 12.3709 7.5699 12.3709 7.74732V9.2527Z"
                  fill="white"
                ></path>{" "}
              </svg>
            </div>
          </div>
        </div>

        {/* header */}
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 border-t-0 border-r-0 border-b border-l-0 border-[#dadce0]">
          {
            aWeek.map((item) => (
              <div key={item.label} className="flex justify-center items-center flex-grow h-6 relative gap-2.5 px-2.5" >
                <div className="flex-grow-0 flex-shrink-0 w-[15px] h-[15px] relative" >
                  <img
                    src={`icons/${item.icon}`}
                    className="w-[15px] h-[15px] absolute left-[-1px] top-[-1px] object-cover"
                  />
                </div >
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5" >
                  <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left " >
                    {
                      item.label
                    }
                  </p >
                </div >
              </div >
            ))
          }
        </div>
        {/* header */}

        <div className="self-stretch flex-grow relative w-full h-full">
          <div className="flex flex-col justify-center items-start w-full h-full">
            {weeks.map((week, index) => (
              <div
                className="flex justify-start items-start self-stretch flex-grow"
                key={index}
              >
                {week.map((day) => (
                  <div
                    key={day.toString()}
                    className="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5 px-1 py-[3px] border border-[#dadce0]/60"
                  >
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-1">
                      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[22px] gap-2.5 p-[5px]">
                        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                          <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left ">
                            {dfs.format(day, "normalDateWithWeekday")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmojiCalendar;
