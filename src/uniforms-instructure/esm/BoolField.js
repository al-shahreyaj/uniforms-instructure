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
import { Checkbox } from '@instructure/ui-checkbox';
function Bool(_a) {
    var { disabled, id, inputRef, label, name, onChange, readOnly, value, error } = _a, props = __rest(_a, ["disabled", "id", "inputRef", "label", "name", "onChange", "readOnly", "value", "error"]);
    return (_jsx("div", Object.assign({}, filterDOMProps(props), { children: _jsx(Checkbox, { id: id, name: name, label: label, checked: !!value, onChange: (event, data) => {
                var _a;
                if (!disabled && !readOnly) {
                    if (data && typeof data.checked === 'boolean') {
                        onChange(data.checked);
                    }
                    else if (event && typeof ((_a = event.target) === null || _a === void 0 ? void 0 : _a.checked) === 'boolean') {
                        onChange(event.target.checked);
                    }
                    else {
                        onChange(!value);
                    }
                }
            }, disabled: disabled, readOnly: readOnly, inputRef: inputRef, messages: typeof error === 'string' ? [{ text: error, type: 'error' }] : [] }) })));
}
export default connectField(Bool, { kind: 'leaf' });
