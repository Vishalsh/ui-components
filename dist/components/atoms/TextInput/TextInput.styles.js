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
exports.StyledTextWrapper = exports.StyledTextInput = exports.Wrapper = void 0;
const styled_components_1 = __importStar(require("styled-components"));
exports.Wrapper = styled_components_1.default.div `
  margin: 20px;
`;
exports.StyledTextInput = styled_components_1.default.input `
  height: ${({ theme, height }) => `${height || theme.gridSize * 6}px`};
  padding: ${({ theme }) => `${theme.gridSize * 1.5}px ${theme.gridSize * 2}px`};
  color: ${({ theme }) => theme.textInput.default.color};
  background-color: ${({ theme }) => theme.textInput.default.backgroundColor};
  border: 1px solid;
  border-color: ${({ theme }) => theme.textInput.default.borderColor};
  box-sizing: border-box;
  width: 100%;
  
    ${({ active, success, error, theme }) => active &&
    !success &&
    !error &&
    styled_components_1.css `
        border-color: ${theme.colors.primary[500]};
      `}
    ${({ success, theme }) => success &&
    styled_components_1.css `
      color: ${theme.textInput.success.color};
      background-color: ${theme.textInput.success.backgroundColor};
      border-color: ${theme.textInput.success.borderColor};
      padding-right: ${theme.gridSize * 6}px;
    `}
    ${({ error, theme }) => error &&
    styled_components_1.css `
        color: ${theme.textInput.error.color};
        background-color: ${theme.textInput.error.backgroundColor};
        border-color: ${theme.textInput.error.borderColor};
        padding-right: ${theme.gridSize * 6}px;
      `}
    ${({ disabled, theme }) => disabled &&
    styled_components_1.css `
        color: ${theme.textInput.disabled.color};
        background-color: ${theme.textInput.disabled.backgroundColor};
        border-color: ${theme.textInput.disabled.borderColor};
      `};
`;
exports.StyledTextWrapper = styled_components_1.default.div `
  min-height: ${({ theme }) => `${theme.gridSize * 6}px`};
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 1;
`;
