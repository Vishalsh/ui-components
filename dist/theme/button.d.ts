interface IButtonType {
    color: string;
    backgroundColor?: string;
    borderColor?: string;
    fontFamily: string;
    border: string;
    disabled: {
        color: string;
        backgroundColor?: string;
        borderColor?: string;
    };
    horizontalPadding: boolean;
}
export declare const primary: IButtonType;
export declare const secondary: IButtonType;
interface IButtonSize {
    height: string;
    borderRadius: string;
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
    paddingVertical: string;
    paddingHorizontal: string;
}
interface ISize {
    xlarge: IButtonSize;
    large: IButtonSize;
    medium: IButtonSize;
    small: IButtonSize;
    xsmall: IButtonSize;
}
export interface IButton {
    type: {
        primary: IButtonType;
        secondary: IButtonType;
    };
    size: ISize;
}
export declare const button: IButton;
export {};
