import React, { ButtonHTMLAttributes, useEffect, useState } from "react"
import { MynauiCalendar } from "../svg/navbar/Calendar"
import { MdiLightHeart } from "../svg/navbar/Heart"
import { IcRoundHome } from "../svg/navbar/Home"
import { MaterialSymbolsLightPill } from "../svg/navbar/Pill"
import { Button } from "../../stories/Button"

const ButtonVariants = {
  active : {
    buttonVariant : "size-10 bg-scale-1000 flex items-center justify-center rounded-full",
    iconVariant : {
      color: "text-primary-100",
      props: "size-6"
    }
  },
  disable : {
    buttonVariant : "size-10 bg-scale-100 flex items-center justify-center rounded-full",
    iconVariant : {
      color: "text-primary-300",
      props: "size-6"
    }
  }
}

  interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "active" | "disable";
    icon : React.ReactElement;
  }

  type Button = {
    icon: React.ReactElement;
    args: ButtonI;
  }

const NavBar = () => {
  const [page , setPage] = useState("")

  function isActive(button: string) {
    return page === button ? ButtonVariants.active : ButtonVariants.disable
  }

  return (
      <div className="p-3 w-navbar h-navbar bg-scale-100 flex justify-between">
        <button className={isActive("home").buttonVariant} style={{ fill: 'black' }} onClick={() => setPage("home")}>
          <IcRoundHome className={isActive("home").iconVariant.props} color={isActive("medication").iconVariant.color}/>
        </button>
        <button className={isActive("medication").buttonVariant} onClick={() => setPage("medication")}>
          <MaterialSymbolsLightPill className={isActive("medication").iconVariant.props} color={isActive("medication").iconVariant.color}/>
        </button>
        <button className={isActive("appointment").buttonVariant} onClick={() => setPage("appointment")}>
          <MynauiCalendar className={isActive("appointment").iconVariant.props} color={isActive("medication").iconVariant.color}/>
        </button>
        <button className={isActive("wellfare").buttonVariant} onClick={() => setPage("wellfare")}>
          <MdiLightHeart className={isActive("wellfare").iconVariant.props} color={isActive("medication").iconVariant.color}/>
        </button>
      </div>
    );
}

export default NavBar;