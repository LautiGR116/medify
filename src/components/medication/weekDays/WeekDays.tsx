import "../../../index.css"
import {ButtonHTMLAttributes} from "react";


const ButtonDayVariants =  {
  active: 
    ["size-5 bg-green:500" +
    "flex items-center justify-center " +
    "text_style text_base text-black:500 " +
    "rounded-full"]
  ,
  disable: 
    ["size-5 bg-yellow:600 "  +
    "flex items-center justify-center "+
    "text_style text_base text-black:400 " +
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
