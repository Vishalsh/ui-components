"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.IconType = void 0;
const react_1 = __importDefault(require("react"));
var IconType;
(function (IconType) {
    IconType["trash"] = "trash";
    IconType["cart"] = "cart";
})(IconType = exports.IconType || (exports.IconType = {}));
exports.Icon = ({ type, height = 20, width = 20 }) => {
    return (react_1.default.createElement("img", { src: `../../../assets/icons/${type}.png`, height: height, width: width }));
};
