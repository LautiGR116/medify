import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ProgressButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textColor: string;
  bgColor: string;
  progress: number;
  icon: ReactNode; // Permite pasar un componente de ícono
}

const ProgressButton: React.FC<ProgressButtonProps> = ({
  textColor, bgColor, progress, icon,
  ...props
}) => {
  console.log(`textColor: ${textColor}, bgColor: ${bgColor}`);
  return (
    <button
      role="progressbar"
      className={`${textColor} ${bgColor} w-80 h-16 flex items-center justify-between p-4`}
      {...props}
    >
      <span>{icon}</span> {/* Aquí el ícono como componente */}
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mx-2">
        <div
          className="bg-blue-500 h-full transition-all duration-300"
          style={{ width: `${progress}%`}}
        ></div>
      </div>
    </button>
  );
};

export default ProgressButton;
