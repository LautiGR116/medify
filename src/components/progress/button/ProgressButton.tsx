import React, { useState, useEffect, ButtonHTMLAttributes } from 'react';
import { MaterialSymbolsCheck } from '../../svg/progressButton/Completed';
import { MdiPlay } from '../../svg/progressButton/Play';
import { MaterialSymbolsPause } from '../../svg/progressButton/Pause';

interface ProgressButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor: string;
  unfilledColor: string;
  filledColor: string;
  timeText: string;
}

const ProgressButton: React.FC<ProgressButtonProps> = ({
  text, textColor, filledColor, unfilledColor, timeText, ...props
}) => {
  const [minutes, seconds] = timeText.split(':').map(Number);
  const totalSeconds = minutes * 60 + seconds;
  const [newTime, setNewTime] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);

  const formatTime = () => {
    const mins = Math.floor(newTime / 60);
    const secs = newTime % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isRunning && newTime > 0) {
      const id = setInterval(() => {
        setNewTime((prevTime) => {
          const updatedTime = prevTime - 1;
          if (updatedTime <= 0) {
            setCompleted(true);
            setIsRunning(false);
          }
          return Math.max(updatedTime, 0);
        });
      }, 1000);

      return () => clearInterval(id);
    }
  }, [isRunning, newTime]);

  const handleClick = () => {
    setIsRunning((prev) => !prev);
  };

  const progressPercentage = ((totalSeconds - newTime) / totalSeconds) * 100;

  return (
    <button
      onClick={handleClick}
      className={`relative w-80 h-16 overflow-hidden rounded-xl ${textColor} ${filledColor}`}
      {...props}
    >
      {/* Fondo de progreso con transición suave */}
      <div className={`absolute inset-0 ${unfilledColor} rounded-xl overflow-hidden`}>
        <div
          className={`${filledColor} h-full transition-all duration-500 ease-in-out`}
          style={{ width: `${progressPercentage}%` }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>

      {/* Contenido estático en el frente */}
      <div className="relative z-10 flex items-center justify-between w-full h-full px-4">
        <span className="font-bold font-sans">{text}</span>
        {completed ? (
          <MaterialSymbolsCheck className="size-6" />
        ) : (
          <div className="flex items-center space-x-2">
            <span className="text-callout1 font-bold font-sans">{formatTime()}</span>
            {isRunning ? (
              <MaterialSymbolsPause className="size-6" />
            ) : (
              <MdiPlay className="size-6" />
            )}
          </div>
        )}
      </div>
    </button>
  );
};

export default ProgressButton;
