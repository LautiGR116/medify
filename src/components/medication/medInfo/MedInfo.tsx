import React from 'react';
import IconText from "../iconText/IconText";
import MedicationWeek, { Day } from "../medicationInfo/MedicationWeek";
import { HalfFilledPill, Clock } from "../../svg/medication/Medication"; // Adjust path as needed

type MedInfoProps = {
    pillsLeft: number;
    time: string;
    days: Day[];
};

const MedInfo = ({ pillsLeft, time, days }: MedInfoProps) => {
    return (
        <div className="pr-1 space-y-4">
            <div className="space-y-1">
                <IconText
                    icon={<HalfFilledPill width={16} height={16} />}
                    text={`${pillsLeft} amount of pills left`}
                    size={16}
                />
                <IconText
                    icon={<Clock width={16} height={16} />}
                    text={time}
                    size={16}
                />
                <MedicationWeek days={days} />
            </div>
        </div>
    );
};

export default MedInfo;
