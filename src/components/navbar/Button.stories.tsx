import { MdiLightHeart } from "../svg/navbar/Heart";
import { MynauiCalendar } from "../svg/navbar/Calendar";
import NavBarButton from "./Button";

export default {
  title: 'Cummon-comp/NavBarButton',
  component: NavBarButton,
};

export const Default = {
  key: "disable",
  args : {
    variant : "disable",
    icon : <MynauiCalendar />
  }
}
