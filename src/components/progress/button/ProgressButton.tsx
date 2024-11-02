import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ProgressButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor: string;
  unfilledColor: string;
  filledColor: string;
  progress: number;
  timeText: string;
  icon: ReactNode;
}

const ProgressButton: React.FC<ProgressButtonProps> = ({
  text, textColor, filledColor, unfilledColor, progress, timeText, icon,
  ...props
}) => {
  console.log(`Classes: ${unfilledColor} relative w-80 h-16 flex items-center justify-between p-4 overflow-hidden rounded-xl ${textColor}`);
  console.log(`Styles: backgroundImage: linear-gradient(to right, ${filledColor} ${progress * 100}%, transparent 0%)`);
  return (
    <button
      className={`${unfilledColor} relative w-80 h-16 flex items-center justify-between p-4 overflow-hidden rounded-xl ${textColor}`}
      {...props}
    >
      <div
       className={"relative z-10 flex justify-between w-full items-center px-2"}
       >
        <span className="font-bold">{text}</span>
        <div className={`${unfilledColor} w-full h-2 rounded-full`}></div>
        <span className='px-2.5'>{timeText}</span>
        {React.cloneElement(icon as React.ReactElement, { className: "size-10" })}
      </div>
    </button>
  );
};

export default ProgressButton;
