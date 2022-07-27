"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const styled_components_1 = require("styled-components");
require("jest-styled-components");
const FormControl_1 = require("./FormControl");
const theme_1 = require("../../../theme/theme");
describe('FormControl', () => {
    it('should match the snapshot', () => {
        const { container } = react_2.render(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
            react_1.default.createElement(FormControl_1.FormControl, { label: "Text Input", helpText: "Filium morte multavit si sine dubio praeclara sunt", "data-testid": "text-input" }),
            ","));
        expect(container).toMatchSnapshot();
    });
    it('should match the snapshot for error', () => {
        const { container, getByText } = react_2.render(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
            react_1.default.createElement(FormControl_1.FormControl, { error: true, label: "Text Input", helpText: "Filium morte multavit si sine dubio praeclara sunt", "data-testid": "text-input" }),
            ","));
        expect(container).toMatchSnapshot();
        expect(getByText('Filium morte multavit si sine dubio praeclara sunt')).toHaveStyleRule('color', '#dc3545');
    });
    it('should match the snapshot for success', () => {
        const { container, getByText } = react_2.render(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
            react_1.default.createElement(FormControl_1.FormControl, { success: true, label: "Text Input", helpText: "Filium morte multavit si sine dubio praeclara sunt", "data-testid": "text-input" }),
            ","));
        expect(container).toMatchSnapshot();
        expect(getByText('Filium morte multavit si sine dubio praeclara sunt')).toHaveStyleRule('color', '#28a745');
    });
});
