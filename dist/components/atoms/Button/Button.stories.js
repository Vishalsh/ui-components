"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@storybook/react");
const Button_1 = require("./Button");
const Button_styles_1 = require("./Button.styles");
const ButtonTypes_1 = require("./ButtonTypes");
react_2.storiesOf('Atoms/Button', module)
    .add('Primary Button', () => (react_1.default.createElement("div", { style: {
        flex: 1,
        width: '100%',
        maxWidth: '100%',
        flexWrap: 'wrap',
    } },
    react_1.default.createElement(Button_styles_1.Wrapper, null,
        react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.PRIMARY, onClick: () => { }, size: ButtonTypes_1.ButtonSize.XLARGE, disabled: false }, "Primary Extra Large Button")),
    react_1.default.createElement(Button_styles_1.Wrapper, null,
        react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.PRIMARY, onClick: () => { }, size: ButtonTypes_1.ButtonSize.XLARGE, disabled: true }, "Primary Extra Large Disabled Button")),
    react_1.default.createElement(Button_styles_1.Wrapper, null,
        react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.PRIMARY, onClick: () => { }, size: ButtonTypes_1.ButtonSize.DEFAULT, disabled: false }, "Primary Default (Large) Button")),
    react_1.default.createElement(Button_styles_1.Wrapper, null,
        react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.PRIMARY, onClick: () => { }, size: ButtonTypes_1.ButtonSize.MEDIUM, disabled: false }, "Primary Medium Button")),
    react_1.default.createElement(Button_styles_1.Wrapper, null,
        react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.PRIMARY, onClick: () => { }, size: ButtonTypes_1.ButtonSize.SMALL, disabled: false }, "Primary Small Button")),
    react_1.default.createElement(Button_styles_1.Wrapper, null,
        react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.PRIMARY, onClick: () => { }, size: ButtonTypes_1.ButtonSize.XSMALL, disabled: false }, "Primary Extra Small Button")))))
    .add('Secondary Button', () => (react_1.default.createElement("div", { style: {
        flex: 1,
        width: '100%',
        maxWidth: '100%',
        flexWrap: 'wrap',
    } },
    react_1.default.createElement(Button_styles_1.Wrapper, null,
        react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.SECONDARY, onClick: () => { }, size: ButtonTypes_1.ButtonSize.XLARGE, disabled: false }, "Secondary Extra Large Button")),
    react_1.default.createElement(Button_styles_1.Wrapper, null,
        react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.SECONDARY, onClick: () => { }, size: ButtonTypes_1.ButtonSize.XLARGE, disabled: true }, "Secondary Extra Large Disabled Button")),
    react_1.default.createElement(Button_styles_1.Wrapper, null,
        react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.SECONDARY, onClick: () => { }, size: ButtonTypes_1.ButtonSize.DEFAULT, disabled: false }, "Secondary Default (Large) Button")),
    react_1.default.createElement(Button_styles_1.Wrapper, null,
        react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.SECONDARY, onClick: () => { }, size: ButtonTypes_1.ButtonSize.MEDIUM, disabled: false }, "Secondary Medium Button")),
    react_1.default.createElement(Button_styles_1.Wrapper, null,
        react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.SECONDARY, onClick: () => { }, size: ButtonTypes_1.ButtonSize.SMALL, disabled: false }, "Secondary Small Button")),
    react_1.default.createElement(Button_styles_1.Wrapper, null,
        react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.SECONDARY, onClick: () => { }, size: ButtonTypes_1.ButtonSize.XSMALL, disabled: false }, "Secondary Extra Small Button")))));
