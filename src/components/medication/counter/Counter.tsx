import React, { useState } from "react";

interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  plusIcon: JSX.Element;
  minusIcon: JSX.Element;
}

const Counter: React.FC<CounterProps> = ({ plusIcon, minusIcon }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => { if (count > 0) setCount(count - 1) };

  return (
      <div className="relative justify-between w-[120px] h-[50px] bg-scale-400 flex items-center rounded-lg">
        <button className="w-[30px] h-[30px] items-center justify-center bg-transparent ml-1 focus:outline-none border-none" onClick={decrement}>
          <div className="flex items-center justify-center w-full h-full">
            {minusIcon ? React.cloneElement(minusIcon, { className: `flex-shrink-0 text-primary-600`}) : null}
          </div>
        </button>
        <span className="font-medium text-title2 text-scale-1000">{count}</span>
        <button className="w-[30px] h-[30px] items-center justify-center bg-transparent mr-1 focus:outline-none border-none" onClick={increment}>
          <div className="flex items-center justify-center w-full h-full">
            {plusIcon ? React.cloneElement(plusIcon, { className: `flex-shrink-0 text-primary-600` }) : null}
          </div>
        </button>
      </div>
  );
};

export default Counter;