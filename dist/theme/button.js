"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.button = exports.secondary = exports.primary = void 0;
const colors_1 = require("./colors");
exports.primary = {
    color: colors_1.colors.white,
    borderColor: colors_1.colors.transparent,
    fontFamily: "Roboto-Regular",
    border: "none",
    disabled: {
        color: colors_1.colors.white,
        borderColor: colors_1.colors.transparent,
    },
    horizontalPadding: true,
};
exports.secondary = {
    backgroundColor: colors_1.colors.white,
    color: colors_1.colors.text,
    fontFamily: "Roboto-Regular",
    border: "1px solid",
    disabled: {
        backgroundColor: colors_1.colors.white,
        color: colors_1.colors.dark[100],
    },
    horizontalPadding: true,
};
const size = {
    xlarge: {
        height: "56px",
        borderRadius: "28px",
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.7px",
        paddingVertical: "15px",
        paddingHorizontal: "29.5px",
    },
    large: {
        height: "46px",
        borderRadius: "23px",
        fontSize: "15px",
        lineHeight: "20px",
        letterSpacing: "0.7px",
        paddingVertical: "12px",
        paddingHorizontal: "25.5px",
    },
    medium: {
        height: "40px",
        borderRadius: "20px",
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.7px",
        paddingVertical: "10px",
        paddingHorizontal: "21.5px",
    },
    small: {
        height: "36px",
        borderRadius: "18px",
        fontSize: "13px",
        lineHeight: "19px",
        letterSpacing: "0.7px",
        paddingVertical: "8px",
        paddingHorizontal: "20px",
    },
    xsmall: {
        height: "29px",
        borderRadius: "14.5px",
        fontSize: "12px",
        lineHeight: "19px",
        letterSpacing: "0.7px",
        paddingVertical: "5px",
        paddingHorizontal: "14px",
    },
};
exports.button = {
    type: {
        primary: {
            ...exports.primary,
            disabled: {
                ...exports.primary.disabled,
                backgroundColor: colors_1.colors.primary[200],
            },
            backgroundColor: colors_1.colors.primary[500],
        },
        secondary: {
            ...exports.secondary,
            borderColor: colors_1.colors.primary[500],
            disabled: {
                ...exports.secondary.disabled,
                borderColor: colors_1.colors.primary[200],
            },
        },
    },
    size,
};
