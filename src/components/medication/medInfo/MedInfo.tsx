import IconText from "../iconText/IconText"
import MedicationWeek, { Day } from "../medicationInfo/MedicationWeek"
import Pill from "../../svg/pill.png"

type MedInfoProps = {
    pillsLeft : number,
    time: string,
    days : Day[]
}

const MedInfo = ({pillsLeft, time, days} : MedInfoProps) => {
    return (
        <div className="pr-1" >
          <IconText icon={Pill} text={pillsLeft.toString() +" amount of pills left"}/>
          <IconText icon={Pill} text={time}/>            
          <MedicationWeek days={days}/>
        </div>
    )
}

export default MedInfo;