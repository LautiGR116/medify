import {HalfFilledPill} from "../../svg/medication/Medication";
import Reminder from "./Reminder";

export default {
  title: "Medication/Reminder",
  component: Reminder
}

export const Default = {
  args: {
    icon: <HalfFilledPill />,
    title: "Medicine name",
    subtitle: "2 pills, 9:00"
  }
}