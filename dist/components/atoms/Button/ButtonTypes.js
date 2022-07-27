"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonSpinnerSize = exports.ButtonSize = exports.ButtonAction = void 0;
var ButtonAction;
(function (ButtonAction) {
    ButtonAction["PRIMARY"] = "primary";
    ButtonAction["SECONDARY"] = "secondary";
})(ButtonAction = exports.ButtonAction || (exports.ButtonAction = {}));
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["DEFAULT"] = "large";
    ButtonSize["XLARGE"] = "xlarge";
    ButtonSize["MEDIUM"] = "medium";
    ButtonSize["SMALL"] = "small";
    ButtonSize["XSMALL"] = "xsmall";
})(ButtonSize = exports.ButtonSize || (exports.ButtonSize = {}));
var ButtonSpinnerSize;
(function (ButtonSpinnerSize) {
    ButtonSpinnerSize[ButtonSpinnerSize["large"] = 20] = "large";
    ButtonSpinnerSize[ButtonSpinnerSize["xlarge"] = 24] = "xlarge";
    ButtonSpinnerSize[ButtonSpinnerSize["medium"] = 19] = "medium";
    ButtonSpinnerSize[ButtonSpinnerSize["small"] = 18] = "small";
    ButtonSpinnerSize[ButtonSpinnerSize["xsmall"] = 16] = "xsmall";
})(ButtonSpinnerSize = exports.ButtonSpinnerSize || (exports.ButtonSpinnerSize = {}));
