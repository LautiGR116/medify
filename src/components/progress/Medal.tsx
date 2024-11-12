import React from "react";
import { EmptyMedal } from "../svg/badge/EmptyMedal";

const MedalVariants = {
    default: <EmptyMedal />,
};

type MedalVariantsType = keyof typeof MedalVariants;

interface MedalProps {
    variant: MedalVariantsType;
    number?: string;  // Add text prop
    className?: string;  // Add className prop for custom styling
}

const Medal: React.FC<MedalProps> = ({ variant, number, className }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            {React.cloneElement(MedalVariants[variant])}
            {number && (
                <div className="absolute mt-9 top-0 text-6xl font-bold text-scale-600">
                    {number}
                </div>
            )}
        </div>
    );
};

export default Medal;