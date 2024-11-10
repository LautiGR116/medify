import { ReactElement } from "react";
import React from "react";
import { RoundedArrow } from "../svg/common/Common";

const HeaderVariants = {
  title: {
    home: ["text-title2 font-bold text-scale-1000"],
    default: ["text-title2 font-bold text-scale-1000"]
  },
  icon: ["size-8 text-scale-1000"]
};

interface HeaderI {
  title: string;
  comp: Icon | null;
}

interface Icon {
  icon: ReactElement;
}

const Header = ({ title, comp }: HeaderI) => {
  function getTitleVariant() {
    return title === "home" ? HeaderVariants.title.home.join(" ") : HeaderVariants.title.default.join(" ");
  }

  return (
      <div className="flex w-header h-header rounded-t-2xl bg-scale-100 items-end px-4 py-2 justify-between">
        <div className="flex-shrink-0 mb-2">
          <RoundedArrow className={`${HeaderVariants.icon.join(" ")} transform -rotate-90`} />
        </div>
        <span title={title} className={`${getTitleVariant()} flex-1 text-center mb-2`}>
        {title}
      </span>
        {comp ? (
            <div className="flex-shrink-0 mb-2">
              {React.cloneElement(comp.icon, { className: HeaderVariants.icon.join(" ") })}
            </div>
        ) : null}
      </div>
  );
};

export default Header;
