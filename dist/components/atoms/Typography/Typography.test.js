"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("jest-styled-components");
const styled_components_1 = require("styled-components");
const theme_1 = require("../../../theme/theme");
const Typography_1 = require("./Typography");
const Typography_2 = require("./Typography");
describe('Typography', () => {
    const typographies = [
        {
            Component: Typography_1.Heading1,
            fontFamily: 'Roboto-Regular',
            color: '#111111',
        },
        {
            Component: Typography_1.Heading2,
            fontFamily: 'Roboto-Regular',
            color: '#111111',
        },
        {
            Component: Typography_1.Heading3,
            fontFamily: 'Roboto-Regular',
            color: '#111111',
        },
        {
            Component: Typography_1.Heading4,
            fontFamily: 'Roboto-Regular',
            color: '#111111',
        },
        {
            Component: Typography_1.PText,
            fontFamily: 'Roboto-Regular',
            color: '#111111',
        },
        {
            Component: Typography_1.Label,
            fontFamily: 'Roboto-Regular',
            color: '#111111',
        },
        {
            Component: Typography_1.HelpText,
            fontFamily: 'Roboto-Regular',
            color: '#111111CC',
            props: { type: Typography_2.HelpTextType.DEFAULT },
        },
        {
            Component: Typography_1.HelpText,
            fontFamily: 'Roboto-Regular',
            color: '#28a745',
            props: { type: Typography_2.HelpTextType.SUCCESS },
        },
        {
            Component: Typography_1.HelpText,
            fontFamily: 'Roboto-Regular',
            color: '#dc3545',
            props: { type: Typography_2.HelpTextType.ERROR },
        },
    ];
    test.each(typographies)('Should render typography component %p with default color', ({ Component, fontFamily, color, props }) => {
        const { container, getByText } = react_2.render(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
            react_1.default.createElement(Component, Object.assign({}, props), "Title")));
        expect(container).toMatchSnapshot();
        expect(getByText('Title')).toHaveStyleRule('color', color);
        expect(getByText('Title')).toHaveStyleRule('font-family', fontFamily);
    });
});
