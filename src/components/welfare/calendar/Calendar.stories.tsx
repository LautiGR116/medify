import { Dayjs } from "dayjs";
import Calendar from "./Calendar";

export default {
  title: 'Welfare/Calendar',
  component: Calendar,
};

export const Default = {
  args: {
      onChange: (day: Dayjs) => console.log(day.format('YYYY-MM-DD')),
      open: true
  }
};