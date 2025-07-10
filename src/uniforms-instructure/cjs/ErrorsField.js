"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const uniforms_1 = require("uniforms");
function ErrorsField(props) {
    const { error, schema } = (0, uniforms_1.useForm)();
    return !error && !props.children ? null : ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, (0, uniforms_1.filterDOMProps)(props), { children: [props.children, (0, jsx_runtime_1.jsx)("ul", { children: schema.getErrorMessages(error).map((message, index) => ((0, jsx_runtime_1.jsx)("li", { children: message }, index))) })] })));
}
exports.default = ErrorsField;
