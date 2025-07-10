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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { connectField, filterDOMProps } from 'uniforms';
import AutoField from './AutoField';
function Nest(_a) {
    var { children, fields, itemProps, label } = _a, props = __rest(_a, ["children", "fields", "itemProps", "label"]);
    return (_jsxs("div", Object.assign({}, filterDOMProps(props), { children: [label && _jsx("label", { children: label }), children ||
                fields.map(field => (_jsx(AutoField, Object.assign({ name: field }, itemProps), field)))] })));
}
export default connectField(Nest);
