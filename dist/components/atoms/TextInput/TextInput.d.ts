import React from 'react';
export interface ITextInputProps {
    disabled?: boolean;
    placeholder?: string;
    error?: boolean;
    success?: boolean;
    onFocus?: VoidFunction;
    onBlur?: VoidFunction;
    maxLength?: number;
    height?: number;
}
export declare const TextInput: React.ForwardRefExoticComponent<ITextInputProps & React.RefAttributes<HTMLElement>>;
