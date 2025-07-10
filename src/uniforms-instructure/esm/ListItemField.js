import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { connectField } from 'uniforms';
import AutoField from './AutoField';
import ListDelField from './ListDelField';
function ListItem({ children = _jsx(AutoField, { label: null, name: "" }), }) {
    return (_jsxs("div", { children: [_jsx(ListDelField, { name: "" }), children] }));
}
export default connectField(ListItem, {
    initialValue: false,
});
