import { composeStories } from "@storybook/react/*";
import Header from "./Header";
import { MaterialSymbolsLightPill } from "../svg/navbar/Pill";
import { WeuiArrowFilled } from "../svg/Arrows";

export default {
  title: "Cummon-comp/Header",
  component: Header,
}

export const Default = {

args: {
  name: "default",
  title: "Medication",
  arrowBack: true,
  comp: {icon: <MaterialSymbolsLightPill /> , iconColor: "text-primary-500", bgColor: ""}}
}
