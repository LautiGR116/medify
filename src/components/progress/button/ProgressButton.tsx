import React, { ReactNode, ButtonHTMLAttributes, useState, useEffect } from 'react';
import { MaterialSymbolsCheck } from '../../svg/Completed';

interface ProgressButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor: string;
  unfilledColor: string;
  filledColor: string;
  progress: number;
  timeText: string;
  icon: ReactNode;
}

const ProgressButton: React.FC<ProgressButtonProps> = ({
  text, textColor, filledColor, unfilledColor, progress, timeText, icon,
  ...props
}) => {
  console.log(timeText)
  const [minutes, seconds] = timeText.split(':').map(Number);
  const [newTime, setNewTime] = useState(new Date(0, 0, 0, 0, minutes, seconds));
  console.log(newTime.getMinutes())
  const [isRunning, setIsRunning] = useState(false); // Estado para controlar si el cronómetro está en marcha
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); // Para almacenar el ID del intervalo
  const [completed, setCompleted] = useState(false);

  const formatTime = () => {
    const totalMinutes = newTime.getMinutes();
    const seconds = newTime.getSeconds();
    return `${String(totalMinutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setNewTime((prevTime) => {
          const newDate = new Date(prevTime.getTime());
          const seconds = newDate.getSeconds();
          const mins = newDate.getMinutes();

          // Si los segundos llegan a 0, disminuye un minuto
          if (seconds === 0) {
            if (mins === 0) {
              setCompleted(true);
              setIsRunning(false);
            }
            newDate.setMinutes(mins - 1);
            newDate.setSeconds(59); // Reinicia los segundos a 59
          } else {
            newDate.setSeconds(seconds - 1); // Decrementa un segundo
          }

          return newDate;
        });
      }, 1000);

      setIntervalId(id); // Guarda el ID del intervalo

      // Limpia el intervalo cuando el componente se desmonta o cuando isRunning cambia
      return () => clearInterval(id);
    }
  }, [isRunning]);

  

  const handleClick = () => {
    if (isRunning) {
      if (intervalId !== null) {
        clearInterval(intervalId); // Detén el intervalo si está corriendo
      }
      setIsRunning(false); // Cambia el estado a no en marcha
    } else {
      setIsRunning(true); // Inicia el cronómetro
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${isRunning? unfilledColor : filledColor} transition relative w-80 h-16 flex items-center justify-between p-4 overflow-hidden rounded-xl ${textColor}`}
      {...props}
    >
      <div
       className={"relative z-10 flex justify-between w-full items-center px-2"}
       >
        <span className="font-bold">{text}</span>
        <div className={`w-full h-2 rounded-full`}></div>
        {completed ? (
          <MaterialSymbolsCheck className="size-10" />
        ) : (
          <>
            <span className='px-2.5'>{formatTime()}</span>
            {React.cloneElement(icon as React.ReactElement, { className: "size-10" })}
          </>
        )}

      </div>
    </button>
  );
};

export default ProgressButton;
