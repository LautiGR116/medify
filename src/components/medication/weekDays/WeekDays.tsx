import React from 'react';
import "../../../index.css";

const DayVariants = {
  active: [
    "size-9 bg-primary-500 flex items-center justify-center text-caption1 text-scale-1000 rounded-full font-medium font-sans"
  ],
  disable: [
    "size-9 bg-scale-100 flex items-center justify-center text-caption1 text-scale-600 rounded-full font-medium font-sans"
  ]
};

type DayVariant = keyof typeof DayVariants;

export interface WeekDayProps {
  title: "Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa" | "Su";
  variant: DayVariant;
}

const WeekDay = ({ variant, title }: WeekDayProps) => {
  const variantClasses = DayVariants[variant];
  const allClasses = variantClasses.join(' ');

  return (
      <h1 className={allClasses}>
        {title}
      </h1>
  );
};

WeekDay.displayName = 'WeekDay';

export default WeekDay;
