import React, { ButtonHTMLAttributes } from 'react';
import "../../../index.css"

const ButtonDayVariants = {
  active: [
    "size-8 bg-primary-500 flex items-center justify-center text-sub text-scale-1000 rounded-full"
  ],
  disable: [
    "size-8 bg-scale-100 flex items-center justify-center text-sub text-scale-600  rounded-full"
  ]
};

type ButtonDayVariant = keyof typeof ButtonDayVariants;


export interface WeekDayProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title : "Mo" | "Tu" | "We" | "Th" | "Fr"| "Sa" | "Su" ,
  variant: ButtonDayVariant; 
}

const WeekDay = ({variant, title, ...props} : WeekDayProps) => {
  const variantClasses = ButtonDayVariants[variant];
  const all = variantClasses.join(' ')
  console.log(variantClasses);
  console.log(all);
  
  return (
    <button className={all} {...props}>
        {title}
    </button>
  );
};

WeekDay.displayName = 'WeekDay';

export default WeekDay;
