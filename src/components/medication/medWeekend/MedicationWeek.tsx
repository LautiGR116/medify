import React from "react";
import WeekDay from "../weekDays/WeekDays";

export type Day = {
  title: 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';
  variant: 'active' | 'disable';
};

export interface MedicationWeekProps {
  days: Day[]
}

const ContainerConstraints = {
  container: "flex items-center space-x-4"
}

const MedicationWeek = (weekend : MedicationWeekProps) => { 
  return (
    <div className={ContainerConstraints.container}>
    {weekend.days.map((day : Day) => (<WeekDay variant={day.variant} title={day.title}/>))}
  </div>
  );
};

MedicationWeek.displayName = 'MedicationWeek';


export default MedicationWeek;