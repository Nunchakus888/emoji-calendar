import { Button } from "flowbite-react";


function Tabs({ dfs }) {
  const now = new Date();
  const weeks = dfs.getWeekArray(now, { weekStartsOn: 0 });
  const year = dfs.getYear(now);
  const month = dfs.getMonth(now) + 1;


  const switchWeekStartOn = () => {
    console.log("----click", weeks);
    // setWeekStartsOn(weekStartsOn === 0 ? 1 : 0);
  };

  return (
    <Button.Group>
      <Button color="gray">week</Button>
      <Button color="gray">month</Button>
      <Button color="gray">year</Button>
    </Button.Group>
  );
}

export default EmojiCalendar;
