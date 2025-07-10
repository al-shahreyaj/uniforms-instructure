# uniforms-unstyled

> Unstyled components for `uniforms`.

## Install

```sh
$ npm install uniforms-unstyled
```

For more in depth documentation see [uniforms.tools](https://uniforms.tools).

# Custom Uniforms Theme with InstructureUI

This guide explains how to implement a custom [uniforms](https://uniforms.tools/) theme that uses [InstructureUI](https://instructure.design/) components for rendering form fields.

---

## 1. Project Setup

### a. Install Required Packages

```
npm install uniforms @instructure/ui-text-input @instructure/ui-checkbox @instructure/ui-buttons
npm install --save-dev typescript @types/react @types/react-dom @types/lodash @types/invariant
```

---

## 2. Create the Theme Directory

Organize your theme in a directory, e.g.:

```
src/uniforms-instructure/
  src/
    TextField.tsx
    BoolField.tsx
    SubmitField.tsx
    ...
  package.json
  tsconfig.base.json
  tsconfig.cjs.json
  tsconfig.esm.json
```

---

## 3. Implement Field Components

### Example: TextField using InstructureUI

```tsx
import React from 'react';
import { HTMLFieldProps, connectField, filterDOMProps } from 'uniforms';
import { TextInput } from '@instructure/ui-text-input';

export type TextFieldProps = HTMLFieldProps<string, HTMLDivElement, { inputRef?: ((inputElement: HTMLInputElement | null) => void) | undefined }>;

function Text({
  autoComplete,
  disabled,
  id,
  inputRef,
  label,
  name,
  onChange,
  placeholder,
  readOnly,
  type,
  value,
  error,
  ...props
}: TextFieldProps) {
  const allowedTypes = ['text', 'email', 'url', 'tel', 'search', 'password'];
  const inputType = allowedTypes.includes(type as string) ? type : 'text';
  const inputRefFn = typeof inputRef === 'function' ? inputRef : undefined;
  return (
    <div {...filterDOMProps(props)}>
      <TextInput
        id={id}
        name={name}
        renderLabel={label}
        value={value ?? ''}
        onChange={(_e, val: string) => onChange(val)}
        autoComplete={autoComplete}
        disabled={disabled}
        readOnly={readOnly}
        inputRef={inputRefFn}
        type={inputType as any}
        placeholder={placeholder}
        messages={typeof error === 'string' ? [{ text: error, type: 'error' }] : []}
      />
    </div>
  );
}

Text.defaultProps = { type: 'text' };

export default connectField<TextFieldProps>(Text, { kind: 'leaf' });
```

### Example: BoolField using InstructureUI

```tsx
import React from 'react';
import { HTMLFieldProps, connectField, filterDOMProps } from 'uniforms';
import { Checkbox } from '@instructure/ui-checkbox';

export type BoolFieldProps = HTMLFieldProps<boolean, HTMLDivElement, { inputRef?: any }>;

function Bool({
  disabled,
  id,
  inputRef,
  label,
  name,
  onChange,
  readOnly,
  value,
  error,
  ...props
}: BoolFieldProps) {
  return (
    <div {...filterDOMProps(props)}>
      <Checkbox
        id={id}
        name={name}
        label={label}
        checked={!!value}
        onChange={(event: any, data?: any) => {
          if (!disabled && !readOnly) {
            if (data && typeof data.checked === 'boolean') {
              onChange(data.checked);
            } else if (event && typeof event.target?.checked === 'boolean') {
              onChange(event.target.checked);
            } else {
              onChange(!value);
            }
          }
        }}
        disabled={disabled}
        readOnly={readOnly}
        inputRef={inputRef}
        messages={typeof error === 'string' ? [{ text: error, type: 'error' }] : []}
      />
    </div>
  );
}

export default connectField<BoolFieldProps>(Bool, { kind: 'leaf' });
```

### Example: SubmitField using InstructureUI

```tsx
import React from 'react';
import { HTMLFieldProps, connectField, filterDOMProps } from 'uniforms';
import { Button } from '@instructure/ui-buttons';

export type SubmitFieldProps = HTMLFieldProps<unknown, HTMLDivElement, { inputRef?: React.Ref<HTMLInputElement> }>;

function Submit({
  disabled,
  inputRef,
  value,
  ...props
}: SubmitFieldProps) {
  return (
    <div {...filterDOMProps(props)}>
      <Button
        type="submit"
        color="primary"
        disabled={!!disabled}
        margin="small"
        ref={inputRef as any}
      >
        {typeof value === 'string' ? value : 'Submit'}
      </Button>
    </div>
  );
}

Submit.defaultProps = { value: 'Submit' };

export default connectField<SubmitFieldProps>(Submit, { kind: 'leaf' });
```

---

## 4. Export All Fields in an Index File

```ts
// src/uniforms-instructure/src/index.ts
export { default as TextField } from './TextField';
export { default as BoolField } from './BoolField';
export { default as SubmitField } from './SubmitField';
// ...export other fields as needed
```

---

## 5. Build the Theme (for CJS/ESM output)

Make sure you have `tsconfig.cjs.json`, `tsconfig.esm.json`, and `tsconfig.base.json` in your theme directory. Then run:

```
npm run build:cjs --prefix src/uniforms-instructure
npm run build:esm --prefix src/uniforms-instructure
```

---

## 6. Use Your Theme in a Uniforms Form

```js
import { AutoForm } from './uniforms-instructure';
// or import specific fields
import { TextField, BoolField, SubmitField } from './uniforms-instructure';

<AutoForm schema={yourSchema} />
```

---

## 7. Tips
- Make sure your uniforms theme exports from the correct entry point (e.g., `index.js` re-exports from `src/index.ts`).
- Ignore your build output (`esm/`, `cjs/`) in `.eslintignore`.
- Rebuild your theme after making changes to field components.
- You can extend this pattern for all field types (Select, Radio, etc.) using the corresponding InstructureUI components.

---

## 8. Resources
- [Uniforms Documentation](https://uniforms.tools/docs/)
- [InstructureUI Documentation](https://instructure.design/)
