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
import omit from 'lodash/omit';
import { connectField, filterDOMProps } from 'uniforms';
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Radio(_a) {
    var { options, disabled, id, label, name, onChange, readOnly, value } = _a, props = __rest(_a, ["options", "disabled", "id", "label", "name", "onChange", "readOnly", "value"]);
    return (_jsxs("div", Object.assign({}, omit(filterDOMProps(props), ['checkboxes']), { children: [label && _jsx("label", { children: label }), options === null || options === void 0 ? void 0 : options.map(option => {
                var _a, _b, _c, _d;
                return (_jsxs("div", { children: [_jsx("input", { checked: option.value === value, disabled: option.disabled || disabled, id: `${id}-${(_a = option.key) !== null && _a !== void 0 ? _a : escape(option.value)}`, name: name, onChange: () => {
                                if (!readOnly) {
                                    onChange(option.value);
                                }
                            }, type: "radio" }), _jsx("label", Object.assign({ htmlFor: `${id}-${(_b = option.key) !== null && _b !== void 0 ? _b : escape(option.value)}` }, { children: (_c = option.label) !== null && _c !== void 0 ? _c : option.value }))] }, (_d = option.key) !== null && _d !== void 0 ? _d : option.value));
            })] })));
}
export default connectField(Radio, { kind: 'leaf' });
