import React from "react";
import WeekDay from "../weekDays/WeekDays";

type Day = {
  title: 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';
  variant: 'active' | 'disable';
};

interface MedicationWeekProps {
  days: Day[]
}

const ContainerConstraints = {
  container: "flex items-center space-x-2"
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