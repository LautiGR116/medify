import React from "react";
import { ButtonHTMLAttributes } from "react";

const ButtonVariants = {
  active: {
    buttonVariant: "bg-primary-500",
    iconVariant: "text-scale-1000 size-6"
  },
  disable: {
    buttonVariant: "bg-scale-100",
    iconVariant: "text-scale-600 size-6"
  }
};

interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "active" | "disable";
  icon: JSX.Element;
}

const NavBarButton = ({ variant, icon, ...props }: ButtonI) => {
  const buttonVariant = ButtonVariants[variant].buttonVariant;
  const iconVariant = ButtonVariants[variant].iconVariant;
  const [active, setActive] = React.useState(false);
  

  return (
    <button
      className={`size-10 flex items-center justify-center rounded-full ${buttonVariant}`}
      {...props}
    >
      {/* Div que ocupa todo el tamaño del botón y centra el icono */}
      <div className="flex items-center justify-center w-full h-full">
        {React.cloneElement(icon, { className: `${iconVariant} flex-shrink-0` })}
      </div>
    </button>
  );
};

export default NavBarButton;
