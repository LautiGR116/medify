import * as React from 'react';
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
  inmutable: boolean
  variant: "active" | "disable"
}

const WeekDay = ({ title, inmutable = false, variant = "disable" }: WeekDayProps) => {
  const [variantState, setVariantState] = React.useState<"active" | "disable">(variant)


  function selectVariant() {
    if (inmutable) {
      return DayVariants[variant].join('')
    }
    return DayVariants[variantState].join('')
    }

    return (
      <span className={selectVariant()}  onClick={() => !inmutable && setVariantState(variantState === "active" ? "disable" : "active")}>
        {title}
      </span>
  );
};

WeekDay.displayName = 'WeekDay';

export default WeekDay;
