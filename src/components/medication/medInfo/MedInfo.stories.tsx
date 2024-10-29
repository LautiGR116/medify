import MedInfo from './MedInfo';

export default {
  title: 'MedInfo',
  component: MedInfo,
};

export const Default = {
  args : {
    pillsLeft: 5,
    text: "X amount of pills left",
    time : "12:00",
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