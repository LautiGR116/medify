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
        <div className="p-3" >
          <MedInfo time={time} days={days} pillsLeft={pillsLeft}/>
        </div>      
      </div>
    )
}

export default MedComp;