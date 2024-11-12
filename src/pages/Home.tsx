import Header from '../components/layout/header/Header';
import UserInfoCard from '../components/home/UserInfoCard';
import {GgProfile} from "../components/svg/common/Common";
import MedicationHomeSection from "../components/home/MedicationHomeSection";
import AppointmentHomeSection from "../components/home/AppointmentHomeSection";
import Navbar from "../components/layout/navbar/Navbar";
import {IcRoundHome} from "../components/svg/navbar/Home";
import {MaterialSymbolsLightPill} from "../components/svg/navbar/Pill";
import {MdiProgressStar, MynauiCalendar} from "../components/svg/navbar/Calendar";
import {MdiLightHeart} from "../components/svg/navbar/Heart";

const Home = () => {
  const navPages = [{icon: <IcRoundHome />}, {icon: <MaterialSymbolsLightPill />}, {icon: <MynauiCalendar />}, {icon: <MdiLightHeart />}, {icon: <MdiProgressStar/>}]

  return (
      <div className="flex-col items-center flex justify-start bg-scale-400 rounded-[53px] w-[393px] h-[852px]">
        <div className="pb-3">
          <Header comp={{icon: <GgProfile/>}} name={"home"} title={"Welcome, Bruno!"}/>
        </div>
        <div className="pb-3">
          <UserInfoCard/>
        </div>
        <div className="pb-3">
          <MedicationHomeSection/>
        </div>
        <div className="pb-3">
          <AppointmentHomeSection/>
        </div>
        <div className="pb-3">
          <Navbar pages={navPages}/>
        </div>
      </div>
  );
};

export default Home;
