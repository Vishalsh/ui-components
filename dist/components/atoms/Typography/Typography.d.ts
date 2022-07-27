import React, { ReactNode } from 'react';
export interface IText {
    children: ReactNode | string;
    color?: string;
}
export declare enum HelpTextType {
    DEFAULT = "default",
    SUCCESS = "success",
    ERROR = "error"
}
export interface IHelpText extends IText {
    type?: HelpTextType.SUCCESS | HelpTextType.ERROR | HelpTextType.DEFAULT;
}
export declare const Heading1: React.FC<IText>;
export declare const Heading2: React.FC<IText>;
export declare const Heading3: React.FC<IText>;
export declare const Heading4: React.FC<IText>;
export declare const PText: React.FC<IText>;
export declare const Label: React.FC<IText>;
export declare const HelpText: React.FC<IHelpText>;
