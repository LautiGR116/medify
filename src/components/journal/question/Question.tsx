import Reminder from "../../common/Reminder";
import React from "react";
import {MediaComplete} from "../../svg/journal/FaceEmoji";
import Button from "../../common/Button";



interface QuestionProps {
  questionnaire: {
    qNumber: number,
    question: string,
    options?: Array<{label: string}>,
  } | undefined;

}

const Question: React.FC<QuestionProps> = (questionnaire) => {
  const options = [{label: "2-4 hours"}, {label: "4-6 hours"}, {label: "6-8 hours"}, {label: "less than 2 hours"}, {label: "more than 8 hours"}]
  return (<>
        {questionnaire.questionnaire ? <>
          <div className="w-[335px] h-[377px] bg-scale-100 rounded-[10px] pt-[30px] px-4">
            <div className="text-scale-500 font-bold text-largeTitle pb-4">
              Q{questionnaire.questionnaire.qNumber}
            </div>
            <div className="text-scale-1000 font-bold text-title2 pb-4">
              {questionnaire.questionnaire.question}
            </div>
            <div>
              <Reminder options={options}/>
            </div>
          </div>
        </>
        :
            <>
              <div className="w-[335px] h-[377px] bg-scale-100 rounded-[10px] pt-[16px] px-4 flex flex-col items-center">
                  <div className="text-center pb-[10px]">
                    {React.cloneElement(<MediaComplete/>, {className: 'text-primary-600', height: 115, width: 115})}
                  </div>
                  <div className="text-scale-700 text-title1 font-semibold text-center pb-[10px]">
                    Survey Completed!
                  </div>
                  <div className="text-scale-700 text-title2 font-normal text-center pb-[102px]">
                    Congrats your streak is still going
                  </div>
                <div>
                  <Button label={"Go back to welfare"} width={"303px"} size={"large"}/>
                </div>
              </div>
            </>
        }
  </>);
}

export default Question;