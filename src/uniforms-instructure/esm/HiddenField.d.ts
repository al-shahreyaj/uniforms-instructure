import { HTMLProps, Ref } from 'react';
import { Override } from 'uniforms';
export type HiddenFieldProps = Override<HTMLProps<HTMLInputElement>, {
    inputRef?: Ref<HTMLInputElement>;
    name: string;
    noDOM?: boolean;
    value?: unknown;
}>;
export default function HiddenField({ value, ...rawProps }: HiddenFieldProps): import("react/jsx-runtime").JSX.Element | null;
