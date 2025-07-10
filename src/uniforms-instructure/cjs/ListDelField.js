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
function ListDel(_a) {
    var { disabled, name, readOnly } = _a, props = __rest(_a, ["disabled", "name", "readOnly"]);
    const nameParts = (0, uniforms_1.joinName)(null, name);
    const nameIndex = +nameParts[nameParts.length - 1];
    const parentName = (0, uniforms_1.joinName)(nameParts.slice(0, -1));
    const parent = (0, uniforms_1.useField)(parentName, {}, { absoluteName: true })[0];
    disabled || (disabled = readOnly || parent.minCount >= parent.value.length);
    function onAction(event) {
        if (!disabled && (!('key' in event) || event.key === 'Enter')) {
            const value = parent.value.slice();
            value.splice(nameIndex, 1);
            parent.onChange(value);
        }
    }
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({}, (0, uniforms_1.filterDOMProps)(props), { onClick: onAction, onKeyDown: onAction, role: "button", tabIndex: 0 }, { children: "-" })));
}
exports.default = (0, uniforms_1.connectField)(ListDel, {
    initialValue: false,
    kind: 'leaf',
});
