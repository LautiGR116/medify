import { useState } from "react";
import { IconamoonArrowDown2, IconamoonArrowUp2 } from "../svg/Arrows";
import IndJournal from "./IndJournal";

type Feeling = "Very Good" | "Good" | "Neutral" | "Sad" | "Very Sad";

type IndJournalI = {
  feeling: Feeling;
  time: string;
  day: string;
  description: string;
};

interface JournalI {
  journals: IndJournalI[];
  time: string;
  day: string;
}

const Journal = ({ journals, time, day }: JournalI) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-scale-100 w-button h-auto rounded-lg overflow-clip">
      <div className="h-auto w-4" >
        <div className="bg-secondary-800 h-full w-full " />
      </div>

      {/* Main content */}
      <div className="flex flex-col justify-between items-start py-0.5 px-1 w-full">
        <div className="flex items-center justify-between w-full">
          <span className="text-body font-bold text-scale-1000 px-0">{day}</span>
          {!isOpen && <span className="ml-2 text-scale-200">{time}</span>}
          <div className="ml-auto">
            <Arrow isOpen={isOpen} returnClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
        <div>
          {isOpen
            ? journals.map((journal, index) => (
                <div key={index}>
                  <span className="text-caption2 font-bold text-scale-200 px-3">{"At " + time}</span>
                  <IndJournal {...journal} />
                </div>
              ))
            : <IndJournal {...journals[0]} />}
        </div>
      </div>
    </div>
  );
};

const Arrow = ({ isOpen, returnClick }: { isOpen: boolean; returnClick: () => void }) => {
  return (
    <button className="bg-inherit" onClick={returnClick}>
      <div className="flex items-center">
        {!isOpen ? <IconamoonArrowDown2 className="text-scale-1000 size-3 border-none" /> : <IconamoonArrowUp2 className="text-scale-1000 size-3 border-none" />}
      </div>
    </button>
  );
};

export default Journal;