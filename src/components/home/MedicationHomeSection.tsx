import Title from "./titles/Title";
import Reminder from "../medication/reminder/Reminder";
import {HalfFilledPill} from "../svg/medication/Medication";

const MedicationHomeSection = () => {
  return (
      <div>
        <div className="pb-2">
          <Title title={"Medication"}/>
        </div>
        <div className="pb-2">
          <Reminder icon={<HalfFilledPill/>} title={"Paracetamol"} subtitle={"3 pills, 16:15"}/>
        </div>
        <div>
          <Reminder icon={<HalfFilledPill/>} title={"Ibuprofen"} subtitle={"2 pills, 9:00"}/>
        </div>
      </div>
  )
}
export default MedicationHomeSection;