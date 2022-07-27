"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpTextLeft = exports.HelpTextContainer = exports.LabelHelpText = exports.StyledLabel = exports.LabelContainer = exports.Wrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const Typography_styles_1 = require("../../atoms/Typography/Typography.styles");
const Typography_1 = require("../../atoms/Typography/Typography");
exports.Wrapper = styled_components_1.default.div `
  margin: 20px;
`;
exports.LabelContainer = styled_components_1.default.div `
  flex-direction: row;
  align-items: baseline;
`;
exports.StyledLabel = styled_components_1.default(Typography_styles_1.Label) `
  margin-bottom: ${({ theme }) => `${theme.gridSize}px`};
`;
exports.LabelHelpText = styled_components_1.default(Typography_1.HelpText) `
  margin-left: ${({ theme }) => `${theme.gridSize}px`};
`;
exports.HelpTextContainer = styled_components_1.default.div `
  flex-direction: row;
  margin-top: ${({ theme }) => `${theme.gridSize}px`};
`;
exports.HelpTextLeft = styled_components_1.default.div `
  flex: 1;
  margin-right: ${({ theme }) => `${theme.gridSize}px`};
`;
