import { Day } from "../medicationInfo/MedicationWeek";
import MedInfo from "../medInfo/MedInfo";
import { WeuiArrowFilled } from "../../svg/FowardArrow";

type MedInfoComp = {
  name: string;
  dosis: number;
  time: string;
  days: Day[];
  pillsLeft: number;
};

const MedComp = ({ name, dosis, time, days, pillsLeft }: MedInfoComp) => {
  return (
    <div className="relative w-button h-button p-2.5 bg-scale-100 rounded-l overflow-hidden border-transparent">
      {/* Contenedor flexible para el nombre y el ícono */}
      <div className="flex items-center justify-between pb-1.5">
        <h1 className="text-title2 font-bold text-scale-1000">{name}</h1>
        <WeuiArrowFilled className="w-2.5 h-5 text-scale-1000" />
      </div>
      <div className="relative z-10">
        <MedInfo time={time} days={days} pillsLeft={pillsLeft} />
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
    <div className="w-full bg-primary-500 rounded-xl h-2">
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
