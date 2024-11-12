import React from "react";
import WeekDay from "../weekDays/WeekDays";

export type Day = {
  title: 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';
  variant: 'active' | 'disable';
  inmutable: boolean;
};

export interface MedicationWeekProps {
  days: Day[]
}

const ContainerConstraints = {
  container: "flex justify-between items-center w-[332px]"
}

const MedicationWeek: React.FC<MedicationWeekProps> = ({ days }) => {
  return (
    <div className={ContainerConstraints.container}>
    {days.map((day : Day, index) => (<WeekDay key={index} title={day.title} inmutable={day.inmutable} variant={day.variant} />))}
  </div>
  );
};

MedicationWeek.displayName = 'MedicationWeek';


export default MedicationWeek;
