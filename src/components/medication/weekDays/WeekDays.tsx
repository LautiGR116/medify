import React, { ButtonHTMLAttributes } from 'react';
import "../../../index.css"


const ButtonDayVariants =  {
  active: 
    ["size-7 bg-primary-600 " +  // Cambiado ':' por '-'
    "flex items-center justify-center " +
    "text-body text-black-500 " +  // Cambiado ':' por '-'
    "rounded-full"]
  ,
  disable: 
    ["size-7 bg-primary-200 " +  // Cambiado ':' por '-'
    "flex items-center justify-center " +
    "text-body text-black-400 " +  // Cambiado ':' por '-'
    "rounded-full"]
  ,
}

type ButtonDayVariant = keyof typeof ButtonDayVariants;


export interface WeekDayProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title : "Mo" | "Tu" | "We" | "Th" | "Fr"| "Sa" | "Su" ,
  variant: ButtonDayVariant; 
}

const WeekDay = ({variant, title, ...props} : WeekDayProps) => {
  const variantClasses = ButtonDayVariants[variant];
  console.log(variantClasses);
  return (
    <button className={variantClasses.join(' ')} {...props}>
        {title}
    </button>
  );
};

WeekDay.displayName = 'WeekDay';

export default WeekDay;
