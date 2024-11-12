import WeekDay from './WeekDays';

export default {
  title: 'Medication/WeekDays',
  component: WeekDay,
};

export const Default = {
  args : {
    title : "We"
  }
};

export const Inmutable = {
  args : {
    title: "We",
    inmutable : true,
    variant: "active"
  } 
}

