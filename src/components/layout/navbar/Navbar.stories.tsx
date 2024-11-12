import {MageCalendarFill, MdiProgressStar } from "../../svg/navbar/Calendar";
import {LineMdHeartFilled, MdiLightHeart} from "../../svg/navbar/Heart";
import {MajesticonsHome} from "../../svg/navbar/Home";
import {TablerPillFilled} from "../../svg/navbar/Pill";
import NavBar from "./Navbar";

export default {
  title: 'Layout/NavBar',
  component: NavBar,
}

export const Default = {
  args: {
    pages: [
      {
        icon: <MajesticonsHome />,
      },
      {
        icon: <TablerPillFilled />,
      },
      {
        icon: <MageCalendarFill />,
      },
      {
        icon: <LineMdHeartFilled />,
      },
      {
        icon: <MdiProgressStar />,
      }
    ]
  }
}