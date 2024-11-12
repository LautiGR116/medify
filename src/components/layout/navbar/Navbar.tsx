import React, { ButtonHTMLAttributes } from "react";
import NavBarButton from "./Button";
import { TablerPillFilled } from "../../svg/navbar/Pill";
import { MageCalendarFill, MdiProgressStar } from "../../svg/navbar/Calendar";
import { LineMdHeartFilled } from "../../svg/navbar/Heart";
import { MajesticonsHome } from "../../svg/navbar/Home";

interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
}

interface NavBarProps {
  pages: ButtonI[];
}

const NavBar = ({ pages }: NavBarProps) => {
  return (
    <div className="p-3 w-header h-[82px] bg-scale-100 flex justify-between rounded-b-[53px]">
      {pages.map((page, index) => (
        <NavBarButton key={index} icon={page.icon} />
      ))}
    </div>
  );
};

const DefaultNavBar: React.FC = (...props) => {
  const navPages = [
    { icon: <MajesticonsHome /> },
    { icon: <TablerPillFilled /> },
    { icon: <MageCalendarFill /> },
    { icon: <LineMdHeartFilled /> },
    { icon: <MdiProgressStar /> },
  ]

  return (<NavBar pages={navPages}/>) 
}

export default NavBar;
export { DefaultNavBar };