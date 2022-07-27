interface Shade {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
}
export interface IColorPallete {
    neutral: Shade;
    dark: Shade;
    primary: Shade;
    white: string;
    black: string;
    error: string;
    success: string;
    text: string;
    transparent: string;
    link: string;
}
export declare const colors: IColorPallete;
export {};
