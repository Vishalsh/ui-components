import React from 'react';
import type { ITextInputProps } from '../../atoms/TextInput/TextInput';
interface FormControlProps extends ITextInputProps {
    label: string;
    error?: boolean;
    success?: boolean;
    helpText?: string;
}
export declare const FormControl: React.ForwardRefExoticComponent<FormControlProps & React.RefAttributes<HTMLElement>>;
export {};
