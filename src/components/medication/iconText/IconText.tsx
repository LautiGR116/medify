import React from "react";
import "../../../index.css"

interface IconTextProps {
  icon: string;     // Icon svg format
  text: string;
}


const IconText = ({icon, text} : IconTextProps) => {
  return (
    <div className="flex items-center space-x-4">
      <img src={icon} alt="icon" className="size-8"/>
      <p className="text-lg text-scale-1000">{text}</p>
    </div>
  );
};


export default IconText;