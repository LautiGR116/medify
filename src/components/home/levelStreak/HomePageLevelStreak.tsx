import React from "react";

interface HomePageLevelStreakProps {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  padding: string;
}

const HomePageLevelStreak: React.FC<HomePageLevelStreakProps> = ({ icon, title, subtitle, padding }) => {
  return (
      <div className={`w-40 h-40 bg-scale-100 rounded-[30px] flex flex-col items-center justify-center space-y-${padding}`}>
        <div className="text-body font-semibold text-scale-1000 font-sans text-center">{title}</div>
        <div className="flex items-center justify-center rounded-full bg-scale-100">
          {React.cloneElement(icon, {})}
        </div>
        <div className="text-caption1 font-medium text-scale-1000 text-center">{subtitle}</div>
      </div>
  )
}

export default HomePageLevelStreak;