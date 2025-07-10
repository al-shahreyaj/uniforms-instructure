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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
const uniforms_1 = require("uniforms");
function ListAdd(_a) {
    var { disabled, name, readOnly, value } = _a, props = __rest(_a, ["disabled", "name", "readOnly", "value"]);
    const nameParts = (0, uniforms_1.joinName)(null, name);
    const parentName = (0, uniforms_1.joinName)(nameParts.slice(0, -1));
    const parent = (0, uniforms_1.useField)(parentName, {}, { absoluteName: true })[0];
    const limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
    function onAction(event) {
        if (limitNotReached &&
            !readOnly &&
            (!('key' in event) || event.key === 'Enter')) {
            parent.onChange(parent.value.concat([(0, cloneDeep_1.default)(value)]));
        }
    }
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({}, (0, uniforms_1.filterDOMProps)(props), { onClick: onAction, onKeyDown: onAction, role: "button", tabIndex: 0 }, { children: "+" })));
}
exports.default = (0, uniforms_1.connectField)(ListAdd, {
    initialValue: false,
    kind: 'leaf',
});
