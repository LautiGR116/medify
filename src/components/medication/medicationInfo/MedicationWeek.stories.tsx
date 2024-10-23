import MedicationWeek from "./MedicationWeek.tsx";
import React from "react";



export default {
  title: 'MedicationWeek',
  component: MedicationWeek,
};

const Template = (args) => <MedicationWeek {...args}/>;

export const Default = Template.bind({});
Default.args = {
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