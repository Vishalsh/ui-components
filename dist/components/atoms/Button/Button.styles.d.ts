/// <reference types="react" />
import { ButtonAction, ButtonSize } from "./ButtonTypes";
interface IButton {
    children: React.ReactNode;
    buttonType: ButtonAction;
    size: ButtonSize;
    disabled: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Button: import("styled-components").StyledComponent<"button", any, IButton, never>;
export {};
