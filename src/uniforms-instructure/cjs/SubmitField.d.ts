import React from 'react';
import { HTMLFieldProps } from 'uniforms';
export type SubmitFieldProps = HTMLFieldProps<unknown, HTMLDivElement, {
    inputRef?: React.Ref<HTMLInputElement>;
}>;
declare const _default: import("uniforms").ConnectedField<SubmitFieldProps, unknown>;
export default _default;
