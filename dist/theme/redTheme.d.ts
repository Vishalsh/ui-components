import { ITypography } from "./typography";
import { IColorPallete } from "./colors";
import { ITextInput } from "./textInput";
import { IButton } from "./button";
interface ITheme {
    typography: ITypography;
    colors: IColorPallete;
    textInput: ITextInput;
    button: IButton;
    gridSize: number;
}
export declare const theme: ITheme;
export {};
