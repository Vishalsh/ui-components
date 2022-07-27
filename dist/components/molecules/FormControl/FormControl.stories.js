"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const react_2 = __importDefault(require("react"));
const FormControl_1 = require("./FormControl");
const FormControl_styles_1 = require("./FormControl.styles");
react_1.storiesOf('Molecules', module).add('FormControl', () => (react_2.default.createElement(react_2.default.Fragment, null,
    react_2.default.createElement(FormControl_styles_1.Wrapper, null,
        react_2.default.createElement(FormControl_1.FormControl, { label: "Label", placeholder: "Placeholder", helpText: "Filium morte multavit si sine dubio praeclara sunt" })),
    react_2.default.createElement(FormControl_styles_1.Wrapper, null,
        react_2.default.createElement(FormControl_1.FormControl, { label: "Label", placeholder: "Placeholder", error: true, helpText: "Oops! Looks like you\u2019re missing a few characters" })),
    react_2.default.createElement(FormControl_styles_1.Wrapper, null,
        react_2.default.createElement(FormControl_1.FormControl, { label: "Label", placeholder: "Placeholder", success: true, helpText: "Way to go! You\u2019ve completed your first task" })),
    react_2.default.createElement(FormControl_styles_1.Wrapper, null,
        react_2.default.createElement(FormControl_1.FormControl, { label: "Label", placeholder: "Placeholder", disabled: true, helpText: "Fill the other field to enable this" })))));
