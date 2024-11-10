import React from 'react';

interface CustomCircularProgressProps {
  text: string;
  progress: number; // El progreso se pasa como una propiedad (de 0 a 100)
}

const CustomCircularProgress = ({ text, progress }: CustomCircularProgressProps) => {
  // Calcular el offset del progreso basado en el valor (0 - 100)
  const strokeDashoffset = 439.8 - (439.8 * progress) / 200 ; // Fórmula para calcular el progreso

  return (
    <div className="relative flex items-center justify-center w-[100px] h-[100px]">
      <svg width="100%" height="100%">
        <g transform="rotate(-90 50 50)">
          {/* Círculo gris */}
          <circle
            r="35"  // Radio ajustado a 35px
            cx="50"
            cy="50"
            fill="transparent"
            className="text-gray-300"  // Color de contorno
            strokeWidth="8"  // Grosor ajustado
            stroke="currentColor"
            strokeDasharray="439.8"
            strokeDashoffset="0"
          ></circle>
          {/* Círculo de progreso */}
          <circle
            r="35"
            cx="50"
            cy="50"
            fill="transparent"
            className="text-primary-800"  // Color de contorno
            strokeWidth="8"
            stroke="currentColor"
            strokeDasharray="439.8"
            strokeDashoffset={strokeDashoffset}  // Este es el valor dinámico
          ></circle>
        </g>
        <text
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          fill="currentColor"  // Hace que use el color del contenedor
          className="text-primary-800 text-3xl font-semibold"  // Color y tamaño del texto
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default CustomCircularProgress;
