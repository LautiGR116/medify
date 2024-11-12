import Reminder from "../../medication/reminder/Reminder";
import React from "react";
import {MediaComplete} from "../../svg/journal/FaceEmoji";
import Button from "../../common/button/Button";

type QuestionVariant = 'Question'| 'Bonus' | 'Success';

interface QuestionProps {
  variant: QuestionVariant;
  questionnaire: {
    qNumber: number,
    question: string,
    options?: Array<{label: string}>,
  } | undefined;
  question?: string;
}

const Question: React.FC<QuestionProps> = (props) => {
  const options = [{label: "2-4 hours"}, {label: "4-6 hours"}, {label: "6-8 hours"}, {label: "less than 2 hours"}, {label: "more than 8 hours"}]
  const isQuestion = props.variant === 'Question';
  const isBonus = props.variant === 'Bonus';
  const isSuccess = props.variant === 'Success' ;

  return (<>
        {isQuestion && props.questionnaire && <>
          <div className="w-[335px] bg-scale-100 rounded-[10px] py-[30px] px-4">
            <div className="text-scale-500 font-bold text-largeTitle pb-4">
              Q{props.questionnaire.qNumber}
            </div>
            <div className="text-scale-1000 font-bold text-title2 pb-4">
              {props.questionnaire.question}
            </div>
            <div>
              <Reminder options={options}/>
            </div>
          </div>
        </>
        }
    {isSuccess &&
            <>
              <div className="w-[335px]  bg-scale-100 rounded-[10px] py-[16px] px-4 flex flex-col items-center">
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
    {isBonus && props.question &&
        <div className="bg-scale-100 rounded-[10px] py-[30px] px-4">
            <div className="text-scale-500 font-bold text-largeTitle pb-4">
                BONUS
            </div>
            <div className="text-scale-1000 font-bold text-title2 pb-4">
              {props.question}
            </div>
            <div className="bg-scale-400 h-[196px] rounded-[10px] p-2">
                <input
                    type="text"
                    placeholder="This step is optional..."
                    className="flex-1 bg-transparent outline-none placeholder-scale-600 text-scale-1000"
                />
            </div>
        </div>
    }
  </>);
}

export default Question;