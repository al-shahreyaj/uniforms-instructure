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
function Num(_a) {
    var { decimal, disabled, id, inputRef, label, max, min, name, onChange, placeholder, readOnly, step, value } = _a, props = __rest(_a, ["decimal", "disabled", "id", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "readOnly", "step", "value"]);
    return (_jsxs("div", Object.assign({}, filterDOMProps(props), { children: [label && _jsx("label", Object.assign({ htmlFor: id }, { children: label })), _jsx("input", { disabled: disabled, id: id, max: max, min: min, name: name, onChange: event => {
                    const parse = decimal ? parseFloat : parseInt;
                    const value = parse(event.target.value);
                    onChange(isNaN(value) ? undefined : value);
                }, placeholder: placeholder, readOnly: readOnly, ref: inputRef, step: step || (decimal ? 0.01 : 1), type: "number", value: value !== null && value !== void 0 ? value : '' })] })));
}
export default connectField(Num, { kind: 'leaf' });
