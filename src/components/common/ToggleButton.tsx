import React, { useState } from 'react';

interface ToggleButtonProps {
    text1: string;
    text2: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ text1, text2 }) => {
    const [selected, setSelected] = useState<1 | 2>(1);

    // Base container with responsive width and height
    const baseStyles = `flex rounded-lg overflow-hidden`;

    // Font styles for text (assuming SF Pro Display callout1/medium)
    const textStyles = "text-callout1 font-medium text-scale-1000 text-center";

    // Button-specific styles with padding and conditional background
    const option1Styles = `flex items-center justify-center px-[56px] py-[16px] ${
        selected === 1 ? 'bg-primary-500' : 'bg-scale-100'
    } rounded-l-lg`;
    const option2Styles = `flex items-center justify-center px-[56px] py-[16px] ${
        selected === 2 ? 'bg-primary-500' : 'bg-scale-100'
    } rounded-r-lg`;

    return (
        <div className={baseStyles}>
            <div
                className={`${option1Styles} ${textStyles}`}
                onClick={() => setSelected(1)}
            >
                {text1}
            </div>
            <div
                className={`${option2Styles} ${textStyles}`}
                onClick={() => setSelected(2)}
            >
                {text2}
            </div>
        </div>
    );
};

export default ToggleButton;
