import { Dayjs } from "dayjs";
import Calendar from "./Calendar";

export default {
  title: 'Calendar',
  component: Calendar,
};

export const Default = {
  args: {
      onChange: (day: Dayjs) => console.log(day.format('YYYY-MM-DD')),
      open: true
  }
};