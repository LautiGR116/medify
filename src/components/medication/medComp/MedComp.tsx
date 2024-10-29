import { Day } from "../medicationInfo/MedicationWeek"
import MedInfo from "../medInfo/MedInfo";

type MedInfoComp = {
  name : string, 
  dosis : number,
  time : string,
  days : Day[] 
  pillsLeft : number
}

const MedComp = ({name, dosis, time, days, pillsLeft} : MedInfoComp) => {
    return (
      <div className="p-3" >
          {
          //Hacer que aca ponga la imagen del vector
          }
          <div>
            <h1 className="text-title font-bold text-scale-1000">{name}</h1>
            <MedInfo time={time} days={days} pillsLeft={pillsLeft}/>  
          </div>  
          <ProgressBar pills={pillsLeft} dosis={dosis} />  
      </div>
    )
}

export default MedComp;

type ProgressBarProps = {
  pills: number,
  dosis: number
}

const ProgressBar = ({pills, dosis} : ProgressBarProps) => {
  return (
    <div className="w-full bg-scale-700 rounded-full h-2">
      <div
        className="bg-scale-1000 h-2 rounded-full transition-all duration-300"
        style={{ width: `${(pills / dosis) * 100}%` }}
        role="progressbar"
        aria-valuemin={20}
        aria-valuemax={100}
      ></div>
    </div>
  );
};