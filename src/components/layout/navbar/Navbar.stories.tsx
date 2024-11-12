import {MdiProgressStar, MynauiCalendar } from "../../svg/navbar/Calendar";
import { MdiLightHeart } from "../../svg/navbar/Heart";
import { IcRoundHome } from "../../svg/navbar/Home";
import {TablerPillFilled} from "../../svg/navbar/Pill";
import { MaterialSymbolsCheck } from "../../svg/progressButton/Completed";
import NavBar from "./Navbar";

export default {
  title: 'Layout/NavBar',
  component: NavBar,
}

export const Default = {
  args: {
    pages: [
      {
        icon: <IcRoundHome />,
      },
      {
        icon: <TablerPillFilled />,
      },
      {
        icon: <MynauiCalendar />,
      },
      {
        icon: <MdiLightHeart />,
      },
      {
        icon: <MdiProgressStar/>,
      }
    ]
  }
}