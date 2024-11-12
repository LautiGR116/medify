import React from 'react';
import { MdiTrash } from "../../svg/common/Common";

interface TimeDisplayProps {
    time: string;
    onClick: () => void;
}

export function TimeStamp({ time, onClick }: TimeDisplayProps) {
    return (
        <div className="flex items-center bg-primary-500 text-scale-1000 font-sans text-title3 font-regular px-2 py-1 rounded-md">
            <span className="text-base mr-2">
                {time}
            </span>
            <div onClick={() => onClick()}>
                {React.cloneElement(<MdiTrash />, {
                width: 16,
                height: 16,
                })}
            </div>
        </div>
    );
}
