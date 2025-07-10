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
const xor_1 = __importDefault(require("lodash/xor"));
const uniforms_1 = require("uniforms");
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Select(_a) {
    var { checkboxes, disabled, fieldType, id, inputRef, label, name, onChange, placeholder, readOnly, required, value, options } = _a, props = __rest(_a, ["checkboxes", "disabled", "fieldType", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "required", "value", "options"]);
    const multiple = fieldType === Array;
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, (0, uniforms_1.filterDOMProps)(props), { children: [label && (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: id }, { children: label })), checkboxes ? (options === null || options === void 0 ? void 0 : options.map(option => {
                var _a, _b, _c, _d, _e;
                return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { checked: fieldType === Array
                                ? value === null || value === void 0 ? void 0 : value.includes(option.value)
                                : value === option.value, disabled: (_a = option.disabled) !== null && _a !== void 0 ? _a : disabled, id: `${id}-${(_b = option.key) !== null && _b !== void 0 ? _b : escape(option.value)}`, name: name, onChange: () => {
                                if (!readOnly) {
                                    onChange(fieldType === Array
                                        ? (0, xor_1.default)([option.value], value)
                                        : option.value);
                                }
                            }, type: "checkbox" }), (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: `${id}-${(_c = option.key) !== null && _c !== void 0 ? _c : escape(option.value)}` }, { children: (_d = option.label) !== null && _d !== void 0 ? _d : option.value }))] }, (_e = option.key) !== null && _e !== void 0 ? _e : option.value));
            })) : ((0, jsx_runtime_1.jsxs)("select", Object.assign({ disabled: disabled, id: id, multiple: multiple, name: name, onChange: event => {
                    if (!readOnly) {
                        const item = event.target.value;
                        if (multiple) {
                            const clear = event.target.selectedIndex === -1;
                            onChange(clear ? [] : (0, xor_1.default)([item], value));
                        }
                        else {
                            onChange(item !== '' ? item : undefined);
                        }
                    }
                }, ref: inputRef, value: value !== null && value !== void 0 ? value : '' }, { children: [(!!placeholder || !required || value === undefined) && !multiple && ((0, jsx_runtime_1.jsx)("option", Object.assign({ value: "", disabled: required, hidden: required }, { children: placeholder || label }))), options === null || options === void 0 ? void 0 : options.map(option => {
                        var _a, _b;
                        return ((0, jsx_runtime_1.jsx)("option", Object.assign({ disabled: option.disabled, value: option.value }, { children: (_a = option.label) !== null && _a !== void 0 ? _a : option.value }), (_b = option.key) !== null && _b !== void 0 ? _b : option.value));
                    })] })))] })));
}
exports.default = (0, uniforms_1.connectField)(Select, { kind: 'leaf' });
