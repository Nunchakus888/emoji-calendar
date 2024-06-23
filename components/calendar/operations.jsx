'use client';
import { Button } from "flowbite-react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import {AdapterDateFns} from "./DateFnsAdapter";
import localeUS from "date-fns/locale/en-US";
import locale from "date-fns/locale/zh-CN";


function Operations() {
  const dfs = new AdapterDateFns({ locale });

  const now = new Date();
  const weeks = dfs.getWeekArray(now, { weekStartsOn: 0 });
  const year = dfs.getYear(now);
  const month = dfs.getMonth(now) + 1;

  console.log("----locale", locale);
  console.log("----localeUS", localeUS);
  window.locale = locale;
  window.localeUS = localeUS;

  const switchWeekStartOn = () => {
    console.log("----click", weeks);
    // setWeekStartsOn(weekStartsOn === 0 ? 1 : 0);
  };

  return (
    <Button.Group>
      <Button outline={false}>
        <SlArrowLeft />
      </Button>
      <Button outline={false}>today</Button>
      <Button outline={false}>
        <SlArrowRight />
      </Button>
    </Button.Group>
  );
}

export default Operations;
