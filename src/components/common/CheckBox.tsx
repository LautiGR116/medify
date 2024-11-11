import React, { useState } from "react";
import { CheckBox } from "../svg/common/Common";

const Checkbox = ({
                      shape,
                      label,
                  }: {
    shape: "square" | "circular";
    label: string;
}) => {
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setChecked(!checked);
    };

    const checkboxStyle = `flex items-center space-x-1`;
    const boxStyle = `flex items-center justify-center ${
        shape === "circular" ? "rounded-full" : "rounded"
    } w-[24px] h-[24px] border-2 border-scale-1000 ${
        checked && shape === "square" ? "bg-transparent" : checked ? "bg-scale-1000" : "bg-scale-100"
    }`;
    const iconStyle = `text-scale-1000 w-full h-full flex items-center justify-center`;

    return (
        <div className={checkboxStyle} onClick={handleClick}>
            <div className={boxStyle}>
                {checked && shape === "square" && (
                    React.cloneElement(<CheckBox />, {
                        className: iconStyle,
                    })
                )}
            </div>
            <span
                className="font-sans text-callout1 font-semibold text-scale-1000"
                style={{
                    fontFamily: "SF Pro Display, sans-serif",
                    fontSize: "callout1",
                    paddingLeft: "4px",
                }}
            >
                {label}
            </span>
        </div>
    );
};

export default Checkbox;
