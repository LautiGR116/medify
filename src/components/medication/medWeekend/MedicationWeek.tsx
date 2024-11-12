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
  container: "flex justify-between items-center w-[332px]"
}

const MedicationWeek: React.FC<MedicationWeekProps> = ({ days }) => {
  return (
      <div className={ContainerConstraints.container}>
        {days.map((day: Day, index) => (
            <WeekDay key={index} variant={day.variant} title={day.title} />
        ))}
      </div>
  );
};

MedicationWeek.displayName = 'MedicationWeek';

export default MedicationWeek;
