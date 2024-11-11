import React from 'react';
import Button from "../Button.tsx";

interface PopupProps {
    title: string;
    text: string;
    destructiveButtonText: string;
    confirmButtonText: string;
}

const Popup: React.FC<PopupProps> = ({ title, text, destructiveButtonText, confirmButtonText }) => {
    const buttonWidth = 90
    return (
        <div className="w-[224px] h-[180px] flex flex-col items-center justify-between bg-scale-100 rounded-[10px] p-2">
            <div className="w-full text-scale-1000 text-title2 font-semibold text-center">
                {title}
            </div>
            <div className="py-2 px-4 text-scale-1000 text-caption1 font-regular text-center">
                {text}
            </div>

            {/* Button container with flex-row, spaced to the left and right */}
            <div className="mt-2 flex w-full justify-between">
                <Button
                    variant="filled"
                    state="destructive"
                    label="Filled Button"
                    width={buttonWidth+"px"}
                >
                    {destructiveButtonText}
                </Button>
                <Button
                    variant="filled"
                    state="default"
                    label="Filled Button"
                    width= {buttonWidth+"px"}
                >
                    {confirmButtonText}
                </Button>
            </div>
        </div>
    );
};

export default Popup;