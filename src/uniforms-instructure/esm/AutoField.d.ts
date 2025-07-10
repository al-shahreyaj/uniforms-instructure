/// <reference types="react" />
export { AutoFieldProps } from 'uniforms';
declare const AutoField: (({ experimental_absoluteName: absoluteName, ...rawProps }: import("uniforms").AutoFieldProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>>) & {
    componentDetectorContext: import("react").Context<import("uniforms").ComponentDetector>;
    defaultComponentDetector: import("uniforms").ComponentDetector;
};
export default AutoField;
