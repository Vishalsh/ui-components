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
exports.Button = exports.Wrapper = void 0;
const styled_components_1 = __importStar(require("styled-components"));
exports.Wrapper = styled_components_1.default.div `
  margin: 20px;
  width: 40%;
`;
exports.Button = styled_components_1.default.button `
  width: 100%;
  cursor: pointer;
  min-height: ${({ theme, size }) => theme.button.size[size].height};
  border: ${({ theme, buttonType }) => theme.button.type[buttonType].border};
  border-radius: ${({ theme, size }) => theme.button.size[size].borderRadius};
  justify-content: center;
  align-items: center;
  border-color: ${({ theme, buttonType }) => theme.button.type[buttonType].borderColor};
  background-color: ${({ theme, buttonType }) => theme.button.type[buttonType].backgroundColor};
  padding: ${({ theme, size }) => `${theme.button.size[size].paddingVertical} ${theme.button.size[size].paddingHorizontal}`};
  ${({ buttonType, disabled, theme }) => disabled &&
    styled_components_1.css `
      border-color: ${theme.button.type[buttonType].disabled.borderColor};
      background-color: ${theme.button.type[buttonType].disabled
        .backgroundColor};
    `}
  color: ${({ theme, buttonType, disabled }) => disabled
    ? theme.button.type[buttonType].disabled.color
    : theme.button.type[buttonType].color};
`;
