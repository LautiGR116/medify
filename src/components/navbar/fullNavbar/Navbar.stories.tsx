import NavBar from "./Navbar";
import {
  IcRoundHome,
  MaterialSymbolsLightPill,
  MdiLightHeart,
  MdiProgressStar,
  MynauiCalendar
} from "../../svg/navbar/NavbarIcons";

export default {
  title: 'Common/NavBar',
  component: NavBar,
}

export const Default = {
  args: {
    pages: [
      {
        icon: <IcRoundHome />,
      },
      {
        icon: <MaterialSymbolsLightPill />,
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