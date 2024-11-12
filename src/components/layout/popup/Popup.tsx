import React from 'react';
import Button from "../../common/button/Button";

interface PopupProps {
    title: string;
    text: string;
    destructiveButtonText: string;
    confirmButtonText: string;
}

const Popup: React.FC<PopupProps> = ({ title, text, destructiveButtonText, confirmButtonText }) => {
    const buttonWidth = 70
    return (
        <div className="w-[241px] h-[194px] flex flex-col items-center justify-between bg-scale-100 rounded-[10px]">
            <div className="px-4 py-2.5 flex flex-col h-full">
                {/* div del título */}
                <div className="w-full text-scale-1000 text-title2 font-semibold text-center pb-2.5">
                    {title}
                </div>
                {/* div del texto */}
                <div
                    className="text-scale-1000 text-callout1 font-medium text-center pb-2.5 flex-grow flex items-center justify-center">
                    {text}
                </div>
                {/* div de los buttons */}
                <div className=" flex w-full justify-between">
                    <Button
                        variant="filled"
                        state="destructive"
                        size="large"
                        label={destructiveButtonText}
                    >
                    </Button>
                    <Button
                        variant="filled"
                        state="default"
                        size="large"
                        label={confirmButtonText}
                    >
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Popup;