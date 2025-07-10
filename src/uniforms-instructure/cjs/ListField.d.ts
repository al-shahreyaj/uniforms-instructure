import { HTMLFieldProps } from 'uniforms';
export type ListFieldProps = HTMLFieldProps<unknown[], HTMLUListElement, {
    itemProps?: object;
}>;
declare const _default: import("uniforms").ConnectedField<ListFieldProps, unknown[] | undefined>;
export default _default;
