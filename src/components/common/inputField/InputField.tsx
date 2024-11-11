import React from 'react';

type InputVariant = 'fulfilled' | 'outlined' | 'text';
type InputState = 'default' | 'disabled';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon: React.ReactNode;
    label: string;
    variant?: InputVariant;
    state?: InputState;
}

const TextInput: React.FC<TextInputProps> = ({
                                                 icon,
                                                 label,
                                                 variant = 'fulfilled',
                                                 state = 'default',
                                                 ...props
                                             }) => {
    const isDisabled = state === 'disabled';

    const baseStyles = `flex items-center w-[351px] h-[48px] px-[20px] py-[12px] rounded-[8px] font-sans text-body font-bold transition-colors duration-200`;

    const variantStyles = {
        fulfilled: `bg-primary-500 text-scale-1000 ${isDisabled ? 'bg-scale-500 text-scale-700' : 'text-scale-1000'}`,
        outlined: `border border-primary-500 ${isDisabled ? 'border-scale-500 text-scale-600' : 'text-primary-500'}`,
        text: `bg-transparent ${isDisabled ? 'text-scale-600' : 'text-scale-1000'}`,
    };

    const styles = `${baseStyles} ${variantStyles[variant]} ${isDisabled ? 'cursor-not-allowed' : ''}`;

    return (
        <div className={styles}>
            <div className="flex-shrink-0 mr-[20px]">
                {React.cloneElement(icon as React.ReactElement, {
                    className: `w-5 h-5 ${isDisabled ? 'text-scale-700' : variant === 'outlined' ? 'text-primary-500' : 'text-scale-1000'}`,
                    width: 16,
                    height: 16,
                })}
            </div>
            <input
                type="text"
                placeholder={label}
                disabled={isDisabled}
                className="flex-1 bg-transparent outline-none placeholder-current"
                {...props}
            />
        </div>
    );
};

export default TextInput;
