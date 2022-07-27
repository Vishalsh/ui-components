import { theme as coreTheme } from "../../../theme/theme";
export interface IText {
    color?: string;
    theme: typeof coreTheme;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Heading1: import("styled-components").StyledComponent<"h1", any, IText, never>;
export declare const Heading2: import("styled-components").StyledComponent<"h2", any, IText, never>;
export declare const Heading3: import("styled-components").StyledComponent<"h3", any, IText, never>;
export declare const Heading4: import("styled-components").StyledComponent<"h4", any, IText, never>;
export declare const Heading5: import("styled-components").StyledComponent<"h5", any, IText, never>;
export declare const PText: import("styled-components").StyledComponent<"p", any, IText, never>;
export declare const Label: import("styled-components").StyledComponent<"label", any, IText, never>;
export declare const HelpText: import("styled-components").StyledComponent<"p", any, IText, never>;
