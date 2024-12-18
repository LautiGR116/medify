import HomePageLevelStreak from "./HomePageLevelStreak";
import {MdiFire, Stars} from "../../svg/home/HomeIcons";

export default {
  title: "Home/HomePageLevelStreak",
  component: HomePageLevelStreak
}

export const dayStreak = {
  key: "dayStreak",
  args: {
    icon: <MdiFire className="text-[#DF5430] w-[44px] h-[50px] transform scale-x-[-1]"/>,
    title: "Keep it up!",
    subtitle: "you have a 7 day streak",
    padding: 4
  }
}

export const dontForget = {
  key: "dayStreak",
  args: {
    icon: <MdiFire className="text-scale-600 w-[44px] h-[50px] transform scale-x-[-1]"/>,
    title: "Don't forget!",
    subtitle: "Complete survey to keep your streak!",
    padding: 2
  }
}

export const Level = {
  key: "level",
  args: {
    icon: <Stars/>,
    title: "You are on level 5!",
    subtitle: "150 point to level up!",
    padding: 4
  }
}