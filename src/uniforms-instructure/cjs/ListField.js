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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const uniforms_1 = require("uniforms");
const ListAddField_1 = __importDefault(require("./ListAddField"));
const ListItemField_1 = __importDefault(require("./ListItemField"));
function List(_a) {
    var { children = (0, jsx_runtime_1.jsx)(ListItemField_1.default, { name: "$" }), itemProps, label, value } = _a, props = __rest(_a, ["children", "itemProps", "label", "value"]);
    return ((0, jsx_runtime_1.jsxs)("ul", Object.assign({}, (0, uniforms_1.filterDOMProps)(props), { children: [label && ((0, jsx_runtime_1.jsxs)("label", { children: [label, (0, jsx_runtime_1.jsx)(ListAddField_1.default, { name: "$" })] })), value === null || value === void 0 ? void 0 : value.map((item, itemIndex) => react_1.default.Children.map(children, (child, childIndex) => {
                var _a;
                return react_1.default.isValidElement(child)
                    ? react_1.default.cloneElement(child, Object.assign({ key: childIndex, name: (_a = (child.props.name)) === null || _a === void 0 ? void 0 : _a.replace('$', '' + itemIndex) }, itemProps))
                    : child;
            }))] })));
}
exports.default = (0, uniforms_1.connectField)(List);
