import { ReactElement } from "react";
import React from "react";
import {RoundedArrow} from "../../svg/common/Common";

const HeaderVariants = {
    title: {
        home: ["text-title2 font-bold font-sans text-scale-1000"],
        default: ["text-title2 font-bold font-sans text-scale-1000"]
    },
    icon: ["size-8 text-scale-1000"]
};

interface HeaderI {
    name: string;
    title: string;
    comp: Icon | null;
}

interface Icon {
    icon: ReactElement;
}

const Header = ({name, title, comp }: HeaderI) => {
    function getTitleVariant() {
        return name === "home" ? HeaderVariants.title.home.join(" ") : HeaderVariants.title.default.join(" ");
    }

    return (
        <div className="flex w-header h-header rounded-t-[53px] bg-scale-100 items-end px-4 py-2 justify-between">
            { name !== "home" ? (
                    <>
                        <div className="flex-shrink-0 mb-2">
                            <RoundedArrow className={`${HeaderVariants.icon.join(" ")} transform -rotate-90`} />
                        </div>
                        <span className={`${getTitleVariant()} flex-1 text-center mb-2`}>
            {title}
          </span>
                    </>) :
                <span className={`${getTitleVariant()} flex-1 mb-2 text-left`}>
           {title}
          </span>
            }
            <div className="flex-shrink-0 mb-2">
                {comp ? React.cloneElement(comp.icon, {className: HeaderVariants.icon.join(" ")}) :
                    <div className="w-8 h-8"></div>}
            </div>
        </div>
    );
};

export default Header;