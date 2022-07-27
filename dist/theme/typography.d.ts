export declare type FontFamily = "Roboto-Regular";
export interface ITextRule {
    fontFamily: FontFamily;
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
}
export interface ITypography {
    heading1: ITextRule;
    heading2: ITextRule;
    heading3: ITextRule;
    heading4: ITextRule;
    pText: ITextRule;
    label: ITextRule;
    helpText: ITextRule;
}
export declare const typography: ITypography;
