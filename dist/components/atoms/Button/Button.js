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
exports.ButtonSize = exports.ButtonAction = exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const S = __importStar(require("./Button.styles"));
const ButtonTypes_1 = require("./ButtonTypes");
Object.defineProperty(exports, "ButtonAction", { enumerable: true, get: function () { return ButtonTypes_1.ButtonAction; } });
Object.defineProperty(exports, "ButtonSize", { enumerable: true, get: function () { return ButtonTypes_1.ButtonSize; } });
exports.Button = (props) => {
    const { children, buttonType = ButtonTypes_1.ButtonAction.PRIMARY, size = ButtonTypes_1.ButtonSize.DEFAULT, disabled = false, onClick, ...rest } = props;
    return (react_1.default.createElement(S.Button, Object.assign({ buttonType: buttonType, size: size, disabled: disabled, onClick: onClick }, rest), children));
};
