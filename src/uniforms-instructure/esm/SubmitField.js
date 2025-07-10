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
import { jsx as _jsx } from "react/jsx-runtime";
import { connectField, filterDOMProps } from 'uniforms';
import { Button } from '@instructure/ui-buttons';
function Submit(_a) {
    var { disabled, inputRef, value } = _a, props = __rest(_a, ["disabled", "inputRef", "value"]);
    return (_jsx("div", Object.assign({}, filterDOMProps(props), { children: _jsx(Button, Object.assign({ type: "submit", color: "primary", disabled: !!disabled, margin: "small", ref: inputRef }, { children: typeof value === 'string' ? value : 'Submit' })) })));
}
Submit.defaultProps = { value: 'Submit' };
export default connectField(Submit, { kind: 'leaf' });
