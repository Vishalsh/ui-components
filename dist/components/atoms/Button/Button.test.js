"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const styled_components_1 = require("styled-components");
require("jest-styled-components/");
const Button_1 = require("./Button");
const ButtonTypes_1 = require("./ButtonTypes");
const theme_1 = require("../../../theme/theme");
describe('Button', () => {
    const onClick = jest.fn();
    test('should render primary default button', () => {
        const { container, getByTestId } = react_2.render(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
            react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.PRIMARY, size: ButtonTypes_1.ButtonSize.DEFAULT, onClick: onClick, "data-testid": "primary-button" }, "Click here")));
        expect(container).toMatchSnapshot();
        react_2.fireEvent.click(getByTestId('primary-button'));
        expect(onClick).toHaveBeenCalled();
    });
    test('should render the primary button in disabled mode', () => {
        const { getByTestId } = react_2.render(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
            react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.PRIMARY, size: ButtonTypes_1.ButtonSize.DEFAULT, onClick: onClick, disabled: true, "data-testid": "primary-button" }, "Click here")));
        expect(getByTestId('primary-button')).toHaveStyleRule('background-color', '#90caf9');
        expect(getByTestId('primary-button')).toHaveStyleRule('border-color', 'transparent');
    });
    test('should render secondary default button', () => {
        const { container } = react_2.render(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
            react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.SECONDARY, size: ButtonTypes_1.ButtonSize.DEFAULT, onClick: onClick, "data-testid": "secondary-button" }, "Click here")));
        expect(container).toMatchSnapshot();
    });
    test('should render secondary button in disabled mode', () => {
        const { getByTestId } = react_2.render(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
            react_1.default.createElement(Button_1.Button, { buttonType: ButtonTypes_1.ButtonAction.SECONDARY, size: ButtonTypes_1.ButtonSize.DEFAULT, onClick: onClick, "data-testid": "secondary-button", disabled: true }, "Click here")));
        expect(getByTestId('secondary-button')).toHaveStyleRule('background-color', '#ffffff');
        expect(getByTestId('secondary-button')).toHaveStyleRule('border-color', '#90caf9');
    });
});
