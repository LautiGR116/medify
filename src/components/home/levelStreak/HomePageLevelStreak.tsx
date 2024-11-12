import React from "react";

interface HomePageLevelStreakProps {
    icon: JSX.Element;
    title: string;
    subtitle: string;
}

const HomePageLevelStreak: React.FC<HomePageLevelStreakProps> = ({ icon, title, subtitle }) => {
    return (
        <div className="w-[160px] h-[160px] bg-scale-100 rounded-[30px] flex flex-col items-center justify-center p-1 space-y-0.5">
            <div className="text-body font-semibold text-scale-1000 font-sans text-center">{title}</div>
            <div className="flex items-center justify-center rounded-full bg-scale-100 p-2">
                {React.cloneElement(icon, {})}
            </div>
            <div className="text-caption1 font-medium text-scale-1000 text-center w-full">{subtitle}</div>
        </div>
    );
};

export default HomePageLevelStreak;
