import React, { ButtonHTMLAttributes } from 'react';
import "../../../index.css"

const DayVariants = {
  active: [
    "size-8 bg-primary-500 flex items-center justify-center text-callout1 text-scale-1000 rounded-full font-normal"
  ],
  disable: [
    "size-8 bg-scale-100 flex items-center justify-center text-callout1 text-scale-600 rounded-full font-normal"
  ]
};

type DayVariant = keyof typeof DayVariants;


export interface WeekDayProps {
  title : "Mo" | "Tu" | "We" | "Th" | "Fr"| "Sa" | "Su" ,
  variant: DayVariant; 
}

const WeekDay = ({variant, title} : WeekDayProps) => {
  const variantClasses = DayVariants[variant];
  const all = variantClasses.join(' ')
  return (
    <h1 className={all} >
        {title}
    </h1>
  );
};

WeekDay.displayName = 'WeekDay';

export default WeekDay;
