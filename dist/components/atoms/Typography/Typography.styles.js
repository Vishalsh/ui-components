"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpText = exports.Label = exports.PText = exports.Heading5 = exports.Heading4 = exports.Heading3 = exports.Heading2 = exports.Heading1 = exports.Wrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Wrapper = styled_components_1.default.div `
  margin: 20px;
`;
exports.Heading1 = styled_components_1.default.h1 `
  font-family: ${({ theme }) => theme.typography.heading1.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading1.fontSize};
  line-height: ${({ theme }) => theme.typography.heading1.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.heading1.letterSpacing};
  color: ${({ color, theme }) => color || theme.colors.text};
  padding: 0;
  margin: 0;
`;
exports.Heading2 = styled_components_1.default.h2 `
  font-family: ${({ theme }) => theme.typography.heading2.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading2.fontSize};
  line-height: ${({ theme }) => theme.typography.heading3.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.heading2.letterSpacing};
  color: ${({ color, theme }) => color || theme.colors.text};
  padding: 0;
  margin: 0;
`;
exports.Heading3 = styled_components_1.default.h3 `
  font-family: ${({ theme }) => theme.typography.heading3.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading3.fontSize};
  line-height: ${({ theme }) => theme.typography.heading3.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.heading3.letterSpacing};
  color: ${({ color, theme }) => color || theme.colors.text};
  padding: 0;
  margin: 0;
`;
exports.Heading4 = styled_components_1.default.h4 `
  font-family: ${({ theme }) => theme.typography.heading4.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading4.fontSize};
  line-height: ${({ theme }) => theme.typography.heading4.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.heading4.letterSpacing};
  color: ${({ color, theme }) => color || theme.colors.text};
  padding: 0;
  margin: 0;
`;
exports.Heading5 = styled_components_1.default.h5 `
  font-family: ${({ theme }) => theme.typography.heading5.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading5.fontSize};
  line-height: ${({ theme }) => theme.typography.heading5.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.heading5.letterSpacing};
  color: ${({ color, theme }) => color || theme.colors.text};
  padding: 0;
  margin: 0;
`;
exports.PText = styled_components_1.default.p `
  font-family: ${({ theme }) => theme.typography.pText.fontFamily};
  font-size: ${({ theme }) => theme.typography.pText.fontSize};
  line-height: ${({ theme }) => theme.typography.pText.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.pText.letterSpacing};
  color: ${({ color, theme }) => color || theme.colors.text};
  padding: 0;
  margin: 0;
`;
exports.Label = styled_components_1.default.label `
  font-family: ${({ theme }) => theme.typography.label.fontFamily};
  font-size: ${({ theme }) => theme.typography.label.fontSize};
  line-height: ${({ theme }) => theme.typography.label.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.label.letterSpacing};
  color: ${({ color, theme }) => color || theme.colors.text};
  padding: 0;
  margin: 0;
`;
exports.HelpText = styled_components_1.default.p `
  font-family: ${({ theme }) => theme.typography.helpText.fontFamily};
  font-size: ${({ theme }) => theme.typography.helpText.fontSize};
  line-height: ${({ theme }) => theme.typography.helpText.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.helpText.letterSpacing};
  color: ${({ color }) => color};
  padding: 0;
  margin: 0;
`;
