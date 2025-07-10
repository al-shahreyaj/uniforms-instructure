import { Ref } from 'react';
import { HTMLFieldProps } from 'uniforms';
export type NumFieldProps = HTMLFieldProps<number, HTMLDivElement, {
    decimal?: boolean;
    inputRef?: Ref<HTMLInputElement>;
}>;
declare const _default: import("uniforms").ConnectedField<NumFieldProps, number | undefined>;
export default _default;
