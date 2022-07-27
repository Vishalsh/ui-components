"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
const typography_1 = require("./typography");
const colors_1 = require("./colors");
const textInput_1 = require("./textInput");
const button_1 = require("./button");
const redPalette = {
    ...colors_1.colors,
    primary: {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        600: "#e53935",
        700: "#d32f2f",
    },
};
const redButton = {
    ...button_1.button,
    type: {
        primary: {
            ...button_1.primary,
            disabled: {
                ...button_1.primary.disabled,
                backgroundColor: redPalette.primary[200],
            },
            backgroundColor: redPalette.primary[500],
        },
        secondary: {
            ...button_1.secondary,
            borderColor: redPalette.primary[500],
            disabled: {
                ...button_1.secondary.disabled,
                borderColor: redPalette.primary[200],
            },
        },
    },
};
exports.theme = {
    typography: typography_1.typography,
    colors: redPalette,
    textInput: textInput_1.textInput,
    button: redButton,
    gridSize: 8,
};
