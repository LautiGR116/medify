import React from 'react';
import { Day } from "../medicationInfo/MedicationWeek";
import MedInfo from "../medInfo/MedInfo";
import { RoundedArrow } from "../../svg/common/Common";

type MedInfoComp = {
    name: string;
    dosis: number;
    time: string;
    days: Day[];
    pillsLeft: number;
};

const MedComp = ({ name, dosis, time, days, pillsLeft }: MedInfoComp) => {
    return (
        <div className="relative w-[357px] h-[152px] p-4 bg-scale-100 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between pb-2">
                <h1 className="font-sans text-title2 font-bold text-scale-1000">{name}</h1>
                {React.cloneElement(<RoundedArrow/> as React.ReactElement, {
                    width:"24",
                    height:"24",
                    className: "text-gray-700 transform rotate-90",
                })}
            </div>
            <div className="relative z-10 space-y-2">
                <div className="space-y-1">
                    <MedInfo time={time} days={days} pillsLeft={pillsLeft} />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <ProgressBar pills={pillsLeft} dosis={dosis} />
            </div>
        </div>
    );
};

export default MedComp;

type ProgressBarProps = {
    pills: number;
    dosis: number;
};

const ProgressBar = ({ pills, dosis }: ProgressBarProps) => {
    return (
        <div className="w-full bg-scale-100 rounded-xl h-2">
            <div
                className="bg-scale-1000 h-2 rounded-r-full transition-all duration-300"
                style={{ width: `${(pills / dosis) * 100}%` }}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
            />
        </div>
    );
};
