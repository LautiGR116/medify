import { useState } from "react";
import { HealthiconsHappy, HealthiconsSadOutline, PhSmileyLight, PhSmileyMehLight, PhSmileySadLight } from "../svg/journal/FaceEmoji";
import { IconamoonArrowDown2, IconamoonArrowUp2 } from "../svg/Arrows";

type Feeling = "Very Good" | "Good" | "Neutral" | "Sad" | "Very Sad";

const FeelingToIcon = {
  "Very Good": <HealthiconsHappy className="text-scale-1000 size-10" />,
  "Good": <PhSmileyLight className="text-scale-1000 size-10" />,
  "Neutral": <PhSmileyMehLight className="text-scale-1000 size-10" />,
  "Sad": <PhSmileySadLight className="text-scale-1000 size-10" />,
  "Very Sad": <HealthiconsSadOutline className="text-scale-1000 size-10" />
};

interface IndJournalI {
  feeling: Feeling;
  description: string;
}

const IndJournal = ({ feeling, description }: IndJournalI) => {
  return (
    <div className="bg-scale-100 w-journalContent h-journalContent border-gray-300 rounded-lg">
      <div className="flex items-start">
        <div className="flex items-start pr-2">
          {FeelingToIcon[feeling]}
        </div>
        <div className="mt-2">
          <span className="text-body font-semibold text-scale-1000">
            {feeling}
          </span>
          <p className="text-caption2 text-scale-800">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default IndJournal;
