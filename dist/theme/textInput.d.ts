import { FontFamily } from './typography';
interface ITextInputType {
    color: string;
    placeholderColor?: string;
    backgroundColor: string;
    borderColor: string;
}
export interface ITextInput {
    fontFamily: FontFamily;
    default: ITextInputType;
    disabled: ITextInputType;
    error: ITextInputType;
    success: ITextInputType;
}
export declare const textInput: ITextInput;
export {};
