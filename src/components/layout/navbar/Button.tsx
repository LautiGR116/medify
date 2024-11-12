import React, { useEffect } from "react";
import { ButtonHTMLAttributes } from "react";

const ButtonVariants = {
  active: {
    buttonVariant: "bg-scale-100 transition duration-300 ease-in-out focus: outline-none border-none",
    iconVariant: "text-scale-1000 size-6 transition duration-300 ease-in-out"
  },
  disable: {
    buttonVariant: "bg-primary-200 transition duration-300 ease-in-out focus: outline-none border-none",
    iconVariant: "text-primary-800 size-6 transition duration-300 ease-in-out"
  }
};

interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
}

const NavBarButton = ({ icon, ...props }: ButtonI) => {
  const [active, setActive] = React.useState(false);

  function handleTimeout() {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 1000);
  }

  function isActive() {
    return active ? ButtonVariants["disable"] : ButtonVariants["active"];
  }

  return (
    <button
      className={`focus:outline-none border-none size-10 flex items-center justify-center rounded-full ${isActive().buttonVariant}`}
      {...props}
      onClick={handleTimeout}
    >
      {/* Div que ocupa todo el tamaño del botón y centra el icono */}
      <div className="flex items-center justify-center w-full h-full">
        {React.cloneElement(icon, { className: `${isActive().iconVariant} flex-shrink-0` })}
      </div>
    </button>
  );
};

export default NavBarButton;
