import { Ref } from 'react';
import { HTMLFieldProps } from 'uniforms';
import type { Option } from './types';
export type SelectFieldProps = HTMLFieldProps<string | string[], HTMLDivElement, {
    checkboxes?: boolean;
    inputRef?: Ref<HTMLSelectElement>;
    options?: Option<string>[];
}>;
declare const _default: import("uniforms").ConnectedField<SelectFieldProps, string | string[] | undefined>;
export default _default;
