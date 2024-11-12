import HomePageLevelStreak from "./levelStreak/HomePageLevelStreak";
import {MdiFire, Stars} from "../svg/home/HomeIcons";


const UserInfoCard = () => {
    const fireIcon = <MdiFire className="text-[#DF5430] w-[44px] h-[50px] transform scale-x-[-1]"/>
    const starsIcon = <Stars/>
    return (
        <div className="w-[360px] h-[160px] flex space-x-12">
            <HomePageLevelStreak icon={fireIcon} title={"Don't forget!"} subtitle={"You have a 7 day streak"}/>
            <HomePageLevelStreak icon={starsIcon} title={"You are on level 5!"} subtitle={"150 point to level up!"}/>
        </div>
    );
};

export default UserInfoCard;