import { theme } from '../../../theme/theme';
declare type StyledTextInputProps = {
    active: boolean;
    error: boolean;
    success: boolean;
    disabled: boolean;
    enableClearInput?: boolean;
    theme: typeof theme;
    height?: number;
    ref?: any;
};
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledTextInput: import("styled-components").StyledComponent<"input", any, StyledTextInputProps, never>;
export declare const StyledTextWrapper: import("styled-components").StyledComponent<"div", any, any, never>;
export {};
