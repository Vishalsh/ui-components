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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpText = exports.Label = exports.PText = exports.Heading4 = exports.Heading3 = exports.Heading2 = exports.Heading1 = exports.HelpTextType = void 0;
const react_1 = __importDefault(require("react"));
const S = __importStar(require("./Typography.styles"));
const theme_1 = require("../../../theme/theme");
var HelpTextType;
(function (HelpTextType) {
    HelpTextType["DEFAULT"] = "default";
    HelpTextType["SUCCESS"] = "success";
    HelpTextType["ERROR"] = "error";
})(HelpTextType = exports.HelpTextType || (exports.HelpTextType = {}));
exports.Heading1 = ({ children, ...others }) => {
    return react_1.default.createElement(S.Heading1, Object.assign({}, others), children);
};
exports.Heading2 = ({ children, ...others }) => {
    return react_1.default.createElement(S.Heading2, Object.assign({}, others), children);
};
exports.Heading3 = ({ children, ...others }) => {
    return react_1.default.createElement(S.Heading3, Object.assign({}, others), children);
};
exports.Heading4 = ({ children, ...others }) => {
    return react_1.default.createElement(S.Heading4, Object.assign({}, others), children);
};
exports.PText = ({ children, ...others }) => {
    return react_1.default.createElement(S.PText, Object.assign({}, others), children);
};
exports.Label = ({ children, ...others }) => {
    return react_1.default.createElement(S.Label, Object.assign({}, others), children);
};
exports.HelpText = ({ children, type = HelpTextType.DEFAULT, ...others }) => {
    const color = {
        default: theme_1.theme.colors.dark[400],
        success: theme_1.theme.colors.success,
        error: theme_1.theme.colors.error,
    };
    return (react_1.default.createElement(S.HelpText, Object.assign({}, others, { color: color[type] }), children));
};
