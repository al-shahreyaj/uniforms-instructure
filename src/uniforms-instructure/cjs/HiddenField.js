"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const uniforms_1 = require("uniforms");
function HiddenField(_a) {
    var _b;
    var { value } = _a, rawProps = __rest(_a, ["value"]);
    const props = (0, uniforms_1.useField)(rawProps.name, rawProps, { initialValue: false })[0];
    (0, react_1.useEffect)(() => {
        if (value !== undefined && value !== props.value) {
            props.onChange(value);
        }
    });
    return props.noDOM ? null : ((0, jsx_runtime_1.jsx)("input", Object.assign({ disabled: props.disabled, name: props.name, readOnly: props.readOnly, ref: props.inputRef, type: "hidden", 
        // @ts-expect-error `value` should be serializable.
        value: (_b = value !== null && value !== void 0 ? value : props.value) !== null && _b !== void 0 ? _b : '' }, (0, uniforms_1.filterDOMProps)(props))));
}
exports.default = HiddenField;
