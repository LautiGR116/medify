import React from 'react';

interface AppointmentProps {
  name: string;
  title: string;
  time: string;
  day: string;
  dayName: string;
  variant?: 'reminder' | 'upcomming';
}

const Appointment: React.FC<AppointmentProps> = ({ title, name, time, day, dayName, variant = 'reminder' }) => {

  const mainColor = variant === 'reminder' ? 'bg-terciary-600' : 'bg-scale-100';
  const circleColor = variant === 'reminder' ? 'bg-scale-100' : 'bg-scale-500';
  const dateColor = variant === 'reminder' ? 'text-terciary-800' : 'text-scale-1000';

  return (
      <div className={`w-[358px] h-[88px] flex items-center p-3 ${mainColor} rounded-[10px]`}>
        <div className={`w-[68px] h-[68px] flex flex-col items-center justify-center rounded-full ${circleColor}`}>
          <div className={`${dateColor} text-body font-semibold pt-1`}>{dayName}</div>
          <div className={`${dateColor} text-title1 font-bold pb-1`}>{day}</div>
        </div>
        <div className="pl-2">
          <div className="font-medium text-caption1 text-scale-1000">{name}</div>
          <div className="text-title3 font-bold text-scale-1000">{title}</div>
          <div className="text-callout1 font-medium text-scale-1000">{time}</div>
        </div>
      </div>
  );
};

export default Appointment;