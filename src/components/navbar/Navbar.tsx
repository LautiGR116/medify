import React, { ButtonHTMLAttributes } from "react";
import NavBarButton from "./Button";

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

export default NavBar;