import NavBarButton from "./NavbarButton";
import {MynauiCalendar} from "../../svg/navbar/NavbarIcons";

export default {
  title: 'Common/NavBarButton',
  component: NavBarButton,
};

export const Default = {
  key: "disable",
  args : {
    variant : "disable",
    icon : <MynauiCalendar />
  }
}
