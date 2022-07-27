import React from 'react';
import { ButtonAction, ButtonSize } from './ButtonTypes';
export interface IButton {
    children: React.ReactNode;
    buttonType?: ButtonAction;
    size?: ButtonSize;
    disabled?: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const Button: (props: IButton) => JSX.Element;
export { ButtonAction, ButtonSize };
