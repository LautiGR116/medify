import MedicationWeek from "./MedicationWeek";

export default {
  title: 'Medication/MedicationWeek',
  component: MedicationWeek,
};

export const Default = {
  args : {
    days: [
      {
        title: "Mo",
        variant: "active"
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
    ]
  }
}