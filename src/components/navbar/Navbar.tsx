import React, { ButtonHTMLAttributes, useEffect, useState } from "react"
import NavBarButton from "./Button"

  interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "active" | "disable";
    icon : React.ReactElement;
  }

  type Button = {
    icon: React.ReactElement;
    args: ButtonI;
  }

const NavBar = (pages  : Button[]) => {
  const [page , setPage] = useState("")

  return (
      <div className="p-3 w-navbar h-navbar bg-scale-100 flex justify-between">
        {pages.map((page) => {
          return (
            <NavBarButton {...page.args} onClick={() => setPage(page.args.title)} />
        }}
      </div>
    );
}

export default NavBar;