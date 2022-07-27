"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textInput = void 0;
const colors_1 = require("./colors");
exports.textInput = {
    fontFamily: 'Roboto-Regular',
    default: {
        color: colors_1.colors.text,
        placeholderColor: colors_1.colors.dark[100],
        backgroundColor: colors_1.colors.white,
        borderColor: colors_1.colors.neutral[300],
    },
    disabled: {
        color: colors_1.colors.dark[50],
        backgroundColor: colors_1.colors.neutral[50],
        borderColor: colors_1.colors.neutral[300],
    },
    error: {
        color: colors_1.colors.text,
        backgroundColor: colors_1.colors.white,
        borderColor: colors_1.colors.error,
    },
    success: {
        color: colors_1.colors.text,
        backgroundColor: colors_1.colors.white,
        borderColor: colors_1.colors.success,
    },
};
