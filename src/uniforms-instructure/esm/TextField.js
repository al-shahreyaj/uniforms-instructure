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
import { TextInput } from '@instructure/ui-text-input';
function Text(_a) {
    var { autoComplete, disabled, id, inputRef, label, name, onChange, placeholder, readOnly, type, value, error } = _a, props = __rest(_a, ["autoComplete", "disabled", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "type", "value", "error"]);
    // Only allow valid types for InstructureUI TextInput
    const allowedTypes = ['text', 'email', 'url', 'tel', 'search', 'password'];
    const inputType = allowedTypes.includes(type) ? type : 'text';
    // Convert inputRef to function or undefined
    const inputRefFn = typeof inputRef === 'function' ? inputRef : undefined;
    return (_jsx("div", Object.assign({}, filterDOMProps(props), { children: _jsx(TextInput, { id: id, name: name, renderLabel: label, value: value !== null && value !== void 0 ? value : '', onChange: (_e, val) => onChange(val), autoComplete: autoComplete, disabled: disabled, readOnly: readOnly, inputRef: inputRefFn, type: inputType, placeholder: placeholder, messages: typeof error === 'string' ? [{ text: error, type: 'error' }] : [] }) })));
}
Text.defaultProps = { type: 'text' };
export default connectField(Text, { kind: 'leaf' });
