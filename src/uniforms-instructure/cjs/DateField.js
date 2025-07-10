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
/* istanbul ignore next */
const DateConstructor = (typeof global === 'object' ? global : window).Date;
const dateFormat = (value, type = 'datetime-local') => value === null || value === void 0 ? void 0 : value.toISOString().slice(0, type === 'datetime-local' ? -8 : -14);
function Date(_a) {
    var _b;
    var { disabled, id, inputRef, label, max, min, name, onChange, placeholder, readOnly, value, type = 'datetime-local' } = _a, props = __rest(_a, ["disabled", "id", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "readOnly", "value", "type"]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, (0, uniforms_1.filterDOMProps)(props), { children: [label && (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: id }, { children: label })), (0, jsx_runtime_1.jsx)("input", { disabled: disabled, id: id, max: dateFormat(max), min: dateFormat(min), name: name, onChange: event => {
                    const date = new DateConstructor(event.target.valueAsNumber);
                    if (date.getFullYear() < 10000) {
                        onChange(date);
                    }
                    else if (isNaN(event.target.valueAsNumber)) {
                        onChange(undefined);
                    }
                }, placeholder: placeholder, readOnly: readOnly, ref: inputRef, type: type, value: (_b = dateFormat(value, type)) !== null && _b !== void 0 ? _b : '' })] })));
}
exports.default = (0, uniforms_1.connectField)(Date, { kind: 'leaf' });
