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
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import ListAddField from './ListAddField';
import ListItemField from './ListItemField';
function List(_a) {
    var { children = _jsx(ListItemField, { name: "$" }), itemProps, label, value } = _a, props = __rest(_a, ["children", "itemProps", "label", "value"]);
    return (_jsxs("ul", Object.assign({}, filterDOMProps(props), { children: [label && (_jsxs("label", { children: [label, _jsx(ListAddField, { name: "$" })] })), value === null || value === void 0 ? void 0 : value.map((item, itemIndex) => React.Children.map(children, (child, childIndex) => {
                var _a;
                return React.isValidElement(child)
                    ? React.cloneElement(child, Object.assign({ key: childIndex, name: (_a = (child.props.name)) === null || _a === void 0 ? void 0 : _a.replace('$', '' + itemIndex) }, itemProps))
                    : child;
            }))] })));
}
export default connectField(List);
