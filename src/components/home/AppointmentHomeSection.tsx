import Title from "./titles/Title";
import Appointment from "./appointmentReminder/Appointment";


const AppointmentHomeSection = () => {
  return (
      <div>
        <div className="pb-2">
          <Title title={"Upcoming Appointments"}/>
        </div>
        <div className="pb-2">
          <Appointment name={"Maria Eugenia Pais"} title={"Radiography"} time={"14:00"} day={"05"} dayName={"TUE"}/>
        </div>
        <div>
          <Appointment name={"Lionel Andres Messi"} title={"Blood Test"} time={"12:00"} day={"13"} dayName={"WED"}/>
        </div>
      </div>
  )
}
export default AppointmentHomeSection;