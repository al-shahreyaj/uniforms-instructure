import { Ref } from 'react';
import { HTMLFieldProps } from 'uniforms';
type DateFieldType = 'date' | 'datetime-local';
export type DateFieldProps = HTMLFieldProps<Date, HTMLDivElement, {
    inputRef?: Ref<HTMLInputElement>;
    max?: Date;
    min?: Date;
    type?: DateFieldType;
}>;
declare const _default: import("uniforms").ConnectedField<DateFieldProps, Date | undefined>;
export default _default;
