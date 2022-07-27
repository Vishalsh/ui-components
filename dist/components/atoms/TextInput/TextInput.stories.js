"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const react_2 = __importDefault(require("react"));
const TextInput_1 = require("./TextInput");
const TextInput_styles_1 = require("./TextInput.styles");
react_1.storiesOf('Atoms', module).add('TextInput', () => (react_2.default.createElement(react_2.default.Fragment, null,
    react_2.default.createElement(TextInput_styles_1.Wrapper, null,
        react_2.default.createElement(TextInput_1.TextInput, { placeholder: "Placeholder" })),
    react_2.default.createElement(TextInput_styles_1.Wrapper, null,
        react_2.default.createElement(TextInput_1.TextInput, { success: true, placeholder: "Placeholder" })),
    react_2.default.createElement(TextInput_styles_1.Wrapper, null,
        react_2.default.createElement(TextInput_1.TextInput, { error: true, placeholder: "Placeholder" })),
    react_2.default.createElement(TextInput_styles_1.Wrapper, null,
        react_2.default.createElement(TextInput_1.TextInput, { disabled: true, placeholder: "Placeholder" })))));
