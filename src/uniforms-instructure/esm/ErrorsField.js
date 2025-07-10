import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { filterDOMProps, useForm } from 'uniforms';
export default function ErrorsField(props) {
    const { error, schema } = useForm();
    return !error && !props.children ? null : (_jsxs("div", Object.assign({}, filterDOMProps(props), { children: [props.children, _jsx("ul", { children: schema.getErrorMessages(error).map((message, index) => (_jsx("li", { children: message }, index))) })] })));
}
