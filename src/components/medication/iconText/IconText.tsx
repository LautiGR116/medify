import React from "react";

interface IconTextProps {
  icon: string;     // Icon svg format
  text: string;
}


const IconText = ({icon, text} : IconTextProps) => {
  return (
    <div className="flex items-center space-x-2">
      <img src={icon} alt="icon" className="h-2 w-2"/>
      <span className="body text-black-500">{text}</span>
    </div>
  );
};


export default IconText;