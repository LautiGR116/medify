import MedComp from "./MedComp";

export default {
  title: 'Medication/MedComp',
  component: MedComp,
};

export const Default = {
  args : {
    name: "Paracetamol",
    dosis: 24,
    time: "12:00",
    days: [
      {
        title: "Mo",
      },
      {
        title: "Tu",
        variant: "disable"
      },
      {
        title: "We",
        variant: "active"
      },
      {
        title: "Th",
        variant: "disable"
      },
      {
        title: "Fr",
        variant: "active"
      },
      {
        title: "Sa",
        variant: "disable"
      },
      {
        title: "Su",
        variant: "disable"
      }
    ],
    pillsLeft: 5
  }
}