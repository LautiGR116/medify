import {MaterialSymbolsPillOutline} from "../../svg/medication/Medication";
import Reminder from "./Reminder";

export default {
  title: "Medication reminder",
  component: Reminder
}

export const Default = {
  args: {
    icon: <MaterialSymbolsPillOutline />,
    title: "Medicine name",
    subtitle: "2 pills, 9:00"
  }
}