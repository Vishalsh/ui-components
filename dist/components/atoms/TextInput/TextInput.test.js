"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const styled_components_1 = require("styled-components");
require("jest-styled-components");
const TextInput_1 = require("./TextInput");
const theme_1 = require("../../../theme/theme");
describe('TextInput component', () => {
    it('should render with default props', () => {
        const { container, getByTestId } = react_2.render(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
            react_1.default.createElement(TextInput_1.TextInput, { "data-testid": "text-input" })));
        expect(container).toMatchSnapshot();
        expect(getByTestId('text-input')).toHaveStyleRule('color', '#111111');
        expect(getByTestId('text-input')).toHaveStyleRule('background-color', '#ffffff');
        expect(getByTestId('text-input')).toHaveStyleRule('border-color', '#dedede');
    });
    it('should render with explicit height', () => {
        const { getByTestId } = react_2.render(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
            react_1.default.createElement(TextInput_1.TextInput, { height: 100, "data-testid": "text-input" })));
        expect(getByTestId('text-input')).toHaveStyleRule('height', '100px');
    });
    it('should render with error', () => {
        const { getByTestId } = react_2.render(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
            react_1.default.createElement(TextInput_1.TextInput, { "data-testid": "text-input", error: true })));
        expect(getByTestId('text-input')).toHaveStyleRule('color', '#111111');
        expect(getByTestId('text-input')).toHaveStyleRule('background-color', '#ffffff');
        expect(getByTestId('text-input')).toHaveStyleRule('border-color', '#dc3545');
    });
    it('renders with success', () => {
        const { getByTestId } = react_2.render(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
            react_1.default.createElement(TextInput_1.TextInput, { "data-testid": "text-input", success: true })));
        expect(getByTestId('text-input')).toHaveStyleRule('color', '#111111');
        expect(getByTestId('text-input')).toHaveStyleRule('background-color', '#ffffff');
        expect(getByTestId('text-input')).toHaveStyleRule('border-color', '#28a745');
    });
    it('should trigger onBlur', () => {
        const onBlur = jest.fn();
        const { getByTestId } = react_2.render(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
            react_1.default.createElement(TextInput_1.TextInput, { onBlur: onBlur, "data-testid": "text-input" })));
        react_2.fireEvent.blur(getByTestId('text-input'));
        expect(onBlur).toHaveBeenCalled();
    });
    it('should trigger onFocus', () => {
        const onFocus = jest.fn();
        const { getByTestId } = react_2.render(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
            react_1.default.createElement(TextInput_1.TextInput, { onFocus: onFocus, "data-testid": "text-input" })));
        react_2.fireEvent.focus(getByTestId('text-input'));
        expect(onFocus).toHaveBeenCalled();
    });
});
