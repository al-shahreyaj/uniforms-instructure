import { ComponentType } from 'react';
export type AutoFieldsProps = {
    element?: ComponentType | string;
    fields?: string[];
    omitFields?: string[];
};
export default function AutoFields({ element, fields, omitFields, ...props }: AutoFieldsProps): import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
