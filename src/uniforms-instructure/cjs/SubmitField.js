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
const uniforms_1 = require("uniforms");
const ui_buttons_1 = require("@instructure/ui-buttons");
function Submit(_a) {
    var { disabled, inputRef, value } = _a, props = __rest(_a, ["disabled", "inputRef", "value"]);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({}, (0, uniforms_1.filterDOMProps)(props), { children: (0, jsx_runtime_1.jsx)(ui_buttons_1.Button, Object.assign({ type: "submit", color: "primary", disabled: !!disabled, margin: "small", ref: inputRef }, { children: typeof value === 'string' ? value : 'Submit' })) })));
}
Submit.defaultProps = { value: 'Submit' };
exports.default = (0, uniforms_1.connectField)(Submit, { kind: 'leaf' });
