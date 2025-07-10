/// <reference types="react" />
/// <reference types="node" />
declare const _default: {
    new <Model extends import("uniforms").UnknownObject, Props extends import("uniforms").QuickFormProps<Model> = import("uniforms").QuickFormProps<Model>, State extends import("uniforms").QuickFormState<Model> = import("uniforms").QuickFormState<Model>>(props: Props): {
        getNativeFormProps(): {
            [key: string]: unknown;
            children?: import("react").ReactNode;
            id?: string | undefined;
            key: string;
            noValidate: boolean;
            onSubmit: (event?: import("react").SyntheticEvent<Element, Event> | undefined) => Promise<unknown>;
        };
        getAutoField(): import("react").ComponentType<{
            name: string;
        }>;
        getErrorsField(): import("react").ComponentType<{}>;
        getSubmitField(): import("react").ComponentType<{}>;
        componentDidMount(): void;
        componentDidUpdate(prevProps: Props, prevState: State, snapshot: never): void;
        componentWillUnmount(): void;
        delayId?: NodeJS.Timeout | undefined;
        mounted: boolean;
        reset: () => void;
        change: (key: string, value: unknown) => void;
        submit: (event?: import("react").SyntheticEvent<Element, Event> | undefined) => Promise<unknown>;
        randomId: () => string;
        getContext(): import("uniforms").Context<Model>;
        getContextName(): string[];
        getContextError(): unknown;
        getContextModel(): Model;
        getContextState(): {
            disabled: boolean;
            readOnly: boolean;
            showInlineError: boolean;
        };
        getContextSchema(): import("uniforms").Bridge;
        getContextOnChange(): (key: string, value: unknown) => void;
        getContextOnSubmit(): (event?: import("react").SyntheticEvent<Element, Event> | undefined) => unknown;
        getModel(mode?: import("uniforms").ModelTransformMode | undefined, model?: Model | undefined): Model;
        onChange(key: string, value: unknown): void;
        __reset(state: State): Partial<State>;
        onReset(): void;
        onSubmit(event?: import("react").SyntheticEvent<Element, Event> | undefined): Promise<unknown>;
        render(): import("react").JSX.Element;
        context: unknown;
        setState<K extends keyof State>(state: State | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, K> | null) | Pick<State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Props>;
        state: Readonly<State>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<State>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
    };
    Quick: typeof import("uniforms").Quick;
    displayName: string;
    defaultProps: {
        autosave: boolean;
        autosaveDelay: number;
        error: null;
        model: any;
        noValidate: boolean;
        onSubmit(): void;
    };
    contextType?: import("react").Context<any> | undefined;
} & typeof import("uniforms").BaseForm;
export default _default;
