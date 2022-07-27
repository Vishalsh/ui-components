"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const React = __importStar(require("react"));
const Typography_1 = require("./Typography");
const S = __importStar(require("./Typography.styles"));
react_1.storiesOf('Atoms', module).add('Typography', () => (React.createElement(React.Fragment, null,
    React.createElement(S.Wrapper, null,
        React.createElement(Typography_1.Heading1, null, "Heading1")),
    React.createElement(S.Wrapper, null,
        React.createElement(Typography_1.Heading2, null, "Heading2")),
    React.createElement(S.Wrapper, null,
        React.createElement(Typography_1.Heading3, null, "Heading3")),
    React.createElement(S.Wrapper, null,
        React.createElement(Typography_1.Heading4, null, "Heading4")),
    React.createElement(S.Wrapper, null,
        React.createElement(Typography_1.PText, null, "Paragraph")),
    React.createElement(S.Wrapper, null,
        React.createElement(Typography_1.Label, null, "Label")),
    React.createElement(S.Wrapper, null,
        React.createElement(Typography_1.HelpText, { type: Typography_1.HelpTextType.DEFAULT }, "HelpText")),
    React.createElement(S.Wrapper, null,
        React.createElement(Typography_1.HelpText, { type: Typography_1.HelpTextType.SUCCESS }, "HelpTextError")),
    React.createElement(S.Wrapper, null,
        React.createElement(Typography_1.HelpText, { type: Typography_1.HelpTextType.ERROR }, "HelpTextSuccess")))));
