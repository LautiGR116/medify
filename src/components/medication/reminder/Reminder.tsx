import React from 'react';

interface ReminderProps {
    icon: JSX.Element;
    title: string;
    subtitle: string;
}

const Reminder: React.FC<ReminderProps> = ({ icon, title, subtitle }) => {
    return (
        <div className="w-[358px] h-[88px] flex items-center p-3 bg-primary-500 rounded-[10px] border border-scale-800 ring-1 ring-primary-600">
            <div className="w-[68px] h-[68px] flex items-center justify-center rounded-full bg-scale-100">
                {React.cloneElement(icon, { className: 'text-primary-600', height: 48, width: 48 })}
            </div>
            <div className="pl-2 space-y-2">
                <div className="font-bold text-title3 text-scale-1000">{title}</div>
                <div className="text-callout1 font-medium text-scale-1000">{subtitle}</div>
            </div>
        </div>
    );
};

export default Reminder;
