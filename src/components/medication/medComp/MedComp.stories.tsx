import MedComp from "./MedComp";

export default {
  title: 'Medication/MedicationCard',
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
        inmutable: true
      },
      {
        title: "Tu",
        variant: "active",
        inmutable: true
      },
      {
        title: "We",
        variant: "disable",
        inmutable: true
      },
      {
        title: "Th",
        variant: "disable",
        inmutable: true
      },
      {
        title: "Fr",
        variant: "active",
        inmutable: true
      },
      {
        title: "Sa",
        variant: "disable",
        inmutable: true
      },
      {
        title: "Su",
        variant: "disable",
        inmutable: true

      }
    ],
    pillsLeft: 5
  }
}