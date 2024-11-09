import { useState } from "react";
import { HealthiconsHappy, HealthiconsSadOutline, PhSmileyLight, PhSmileyMehLight, PhSmileySadLight } from "../svg/FaceEmoji";

type Feeling = "very-good"|"good"|"neutral"|"sad"|"very-sad";

const Variant = {
  open : {
    sideColor : [""]

  },
  close: [""]
}

const FeelingToIcon = {
  "very-good": <HealthiconsHappy className=""/>,
  "good": <PhSmileyLight className=""/>,
  "neutral": <PhSmileyMehLight className=""/>,
  "sad": <PhSmileySadLight className=""/>,
  "very-sad": <HealthiconsSadOutline className=""/>
}

interface IndJournalI {
  feeling: Feeling,
  time: string,
  description: string,
  isOpen: () => boolean

}

const IndJournal = ({feeling, time, description, isOpen} : IndJournalI) => {
  return (
    <div className="">
      <div className="flex justify-between py-3">
        <span className="text-title2 font-bold text-scale-1000 px-2">{feeling}</span>
        {!open  ? <span className="text-title2 font-bold text-scale-1000">{time}</span> : null}
      </div>  
      <>
        {!open  ? <span className="text-title2 font-bold text-scale-1000">{time}</span> : null}
        <div className="flex justify-center">
          {FeelingToIcon[feeling]}
          <>
            <span className="text-title2 font-semibold text-scale-1000 py-2">{feeling}</span>
            <span className="text-body text-scale-300">{description}</span>
          </>
        </div>
        
      </>
    </div>
  );
}

export default IndJournal;