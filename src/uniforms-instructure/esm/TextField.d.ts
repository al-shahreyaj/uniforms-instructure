import { HTMLFieldProps } from 'uniforms';
export type TextFieldProps = HTMLFieldProps<string, HTMLDivElement, {
    inputRef?: ((inputElement: HTMLInputElement | null) => void) | undefined;
}>;
declare const _default: import("uniforms").ConnectedField<TextFieldProps, string | undefined>;
export default _default;
