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
import cloneDeep from 'lodash/cloneDeep';
import { connectField, filterDOMProps, joinName, useField, } from 'uniforms';
function ListAdd(_a) {
    var { disabled, name, readOnly, value } = _a, props = __rest(_a, ["disabled", "name", "readOnly", "value"]);
    const nameParts = joinName(null, name);
    const parentName = joinName(nameParts.slice(0, -1));
    const parent = useField(parentName, {}, { absoluteName: true })[0];
    const limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
    function onAction(event) {
        if (limitNotReached &&
            !readOnly &&
            (!('key' in event) || event.key === 'Enter')) {
            parent.onChange(parent.value.concat([cloneDeep(value)]));
        }
    }
    return (_jsx("span", Object.assign({}, filterDOMProps(props), { onClick: onAction, onKeyDown: onAction, role: "button", tabIndex: 0 }, { children: "+" })));
}
export default connectField(ListAdd, {
    initialValue: false,
    kind: 'leaf',
});
