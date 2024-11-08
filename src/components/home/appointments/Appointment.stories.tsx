import Appointment from "./Appontment";

export default {
  title: 'Appointment reminder',
  component: Appointment
}

export const Reminder = {
  key: "reminder",
  args: {
    name: "Dr. John Doe",
    title: "Radiography",
    time: "14:00",
    day: "15",
    dayName: "TUE",
    variant: 'reminder'
  }
};

export const Upcomming = {
  key: "upcomming",
  args: {
    name: "Dr. John Doe",
    title: "Radiography",
    time: "14:00",
    day: "15",
    dayName: "TUE",
    variant: 'upcomming'
  }
};