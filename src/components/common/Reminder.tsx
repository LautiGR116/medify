import React, { useState } from "react";
import Checkbox from "./CheckBox";

interface Option {
    label: string;
    checked?: boolean;
}

interface ReminderProps {
    options: Option[];
}

const Reminder: React.FC<ReminderProps> = ({ options }) => {
    const [checkboxes] = useState(
        options.map(option => ({ ...option, checked: option.checked || false }))
    );

    return (
        <div className="space-y-2">
            {checkboxes.map((checkbox, index) => (
                <Checkbox
                    key={index}
                    shape="square"
                    label={checkbox.label}
                />
            ))}
        </div>
    );
};

export default Reminder;