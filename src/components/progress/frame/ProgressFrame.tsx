import React, { useState } from "react";
import CustomCircularProgress from "./CircularProgress";

interface ProgressFrameProps {
  text: string;
  progress: number;
  tag: string;
  subtag: string;
  isBadge: boolean;
}

const ProgressFrame = ({ text, progress, tag, subtag, isBadge }: ProgressFrameProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-header h-progressFrame bg-scale-100">
      <CustomCircularProgress text={text} progress={progress} />
      <span className="font-sans font-bold text-title2 text-scale-1000 text-center">{tag}</span>
      <span className="font-sans text-body text-scale-600 text-center mb-3">{subtag}</span>
      <SwitchButtons badge={isBadge} />
    </div>
  );
};

interface SwitchButtonsProps {
  badge: boolean;
}

const SwitchButtons = ({ badge }: SwitchButtonsProps) => {
  const [isBadge, setIsBadge] = useState(badge);

  function handleClick(newIsBadge: boolean) {
    if (isBadge !== newIsBadge) setIsBadge(newIsBadge);
  }

  return (
    <div className="h-[50px] w-[393px] flex">
      {!isBadge ? (
        <>
          <button
            className="h-[50px] w-[196px] bg-scale-100 rounded-l-full flex items-center justify-center focus:outline-none border-none"
            onClick={() => handleClick(false)}
          >
            <span className="font-sans text-body font-medium text-scale-700">Missions</span>
          </button>
          <CustomButton text="Badges" rounded="rounded-r-full focus:outline-none border-none" onclick={() => handleClick(true)} />
        </>
      ) : (
        <>
          <CustomButton text="Missions" rounded="rounded-l-full focus:outline-none border-none" onclick={() => handleClick(false)} />
          <button
            className="h-[50px] w-[196px] bg-scale-100 rounded-r-full flex items-center justify-center focus:outline-none border-none"
            onClick={() => handleClick(true)}
          >
            <span className="font-sans text-body font-medium text-scale-700">Badges</span>
          </button>
        </>
      )}
    </div>
  );
};

interface CustomButtonProps {
  text: string;
  rounded: string;
  onclick: () => void;
}

const CustomButton = ({ text, rounded, onclick }: CustomButtonProps) => {
  return (
    <button
      className={`h-[50px] w-[196px] bg-scale-100 flex flex-col items-center justify-center overflow-hidden ${rounded}`}
      onClick={onclick}
    >
      <span className="font-sans text-body font-medium text-primary-500">{text}</span>
      <div className="w-full h-1 mt-1 flex">
        <div className="bg-primary-700 w-full h-full" />
      </div>
    </button>
  );
};

export default ProgressFrame;
