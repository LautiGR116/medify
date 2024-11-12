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
      },
      {
        title: "Tu",
      },
      {
        title: "We",
      },
      {
        title: "Th",
      },
      {
        title: "Fr",
      },
      {
        title: "Sa"
      },
      {
        title: "Su",
      }
    ]
  }
}