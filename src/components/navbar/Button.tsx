import React from "react";
import { ButtonHTMLAttributes } from "react";

const ButtonVariants = {
  active : {
    buttonVariant : "size-10 bg-primary-500 flex items-center justify-center rounded-full",
    iconVariant : "text-scale-1000 size-6"
  },
  disable : {
    buttonVariant : "size-10 bg-scale-100 flex items-center justify-center rounded-full",
    iconVariant : "size-6"
  }
}
interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "active" | "disable";
  icon : JSX.Element;
}

const NavBarButton = ({variant, icon, ...props} : ButtonI) => {
  const buttonVariant = ButtonVariants[variant].buttonVariant;
  const iconVariant = ButtonVariants[variant].iconVariant;
  console.log(iconVariant);
  console.log(buttonVariant);
  console.log(icon);
  return (

    <button className="rounded-full size-10 flex" {...props} >
      <div className={buttonVariant}>
        {React.cloneElement(icon, {className: iconVariant})}
      </div>
    </button>
  ) 
}

export default NavBarButton;