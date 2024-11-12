import React from 'react';

export type ButtonVariant = 'filled' | 'outlined' | 'text';
type ButtonSize = 'medium' | 'large';
export type ButtonState = 'default' | 'pressed' | 'disabled' | 'destructive';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    label?: string;
    size?: ButtonSize;
    state?: ButtonState;
    width?: string;  // Add width prop for fixed width
}

const Button: React.FC<ButtonProps> = ({
                                           variant = 'filled',
                                           size = 'medium',
                                           state = 'default',
                                           width,  // Use width prop
                                           children,
                                           ...props
                                       }) => {
    // Base styles for the button
    const baseStyles = 'font-sans font-semibold text-center rounded-md focus:outline-none';

    // Styles for different sizes
    const sizeStyles = size === 'medium' ? 'text-caption1 px-4 py-2' : 'text-body px-4 py-3';

    // Styles for different variants and states
    const variantStyles = {
        filled: {
            default: 'bg-primary-600 text-scale-1000',
            pressed: 'bg-primary-500 text-scale-1000',
            disabled: 'bg-scale-500 text-scale-700 cursor-not-allowed',
            destructive: 'bg-alert-500 text-scale-1000',
        },
        outlined: {
            default: 'border border-primary-600 text-primary-600 bg-transparent',
            pressed: 'border border-primary-500 text-primary-500 bg-transparent',
            disabled: 'border border-scale-500 text-scale-700 cursor-not-allowed bg-transparent',
            destructive: 'border border-alert-500 text-alert-500 bg-transparent',
        },
        text: {
            default: 'text-primary-600 bg-transparent',
            pressed: 'text-primary-500 bg-transparent',
            disabled: 'text-scale-700 bg-transparent cursor-not-allowed',
            destructive: 'text-alert-500 bg-transparent',
        },
    };

    // Combine all styles based on props
    const styles = `${baseStyles} ${width} ${sizeStyles} ${variantStyles[variant][state]}`;

    return (
        <button className={styles} style={{ width }} disabled={state === 'disabled'} {...props}>
            {children || props.label}
        </button>
    );
};

export default Button;
