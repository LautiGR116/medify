import React from "react";

interface IconTextProps {
    icon: React.ReactNode;
    text: string;
    size?: number;
}

const IconText = ({ icon, text, size = 16 }: IconTextProps) => {
    return (
        <div className="flex items-center space-x-2">
            {React.cloneElement(icon as React.ReactElement, {
                width: size,
                height: size,
                className: "text-scale-1000",
            })}
            <p className="font-sans text-body font-medium text-scale-1000">{text}</p>
        </div>
    );
};

export default IconText;
