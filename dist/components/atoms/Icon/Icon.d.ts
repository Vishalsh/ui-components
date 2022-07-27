import React from 'react';
export declare enum IconType {
    trash = "trash",
    cart = "cart"
}
interface IconProps {
    type: IconType;
    height?: number;
    width?: number;
}
export declare const Icon: React.FC<IconProps>;
export {};
