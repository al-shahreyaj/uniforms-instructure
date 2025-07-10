# uniforms-unstyled

> Unstyled components for `uniforms`.

## Install

```sh
$ npm install uniforms-unstyled
```

For more in depth documentation see [uniforms.tools](https://uniforms.tools).

# Custom Uniforms Theme with InstructureUI (Quick Guide)

You can quickly create a custom uniforms theme using InstructureUI by copying the `uniforms-unstyled` module and updating its components to use InstructureUI components.

---

## Steps

1. **Copy the Module**
   - Duplicate the `uniforms-unstyled` source (or use it as a template).
   - Place it in your project, e.g. `src/uniforms-instructure/`.

2. **Install Dependencies**
   ```sh
   npm install uniforms @instructure/ui
   ```

3. **Update Field Components**
   - Replace raw HTML in each field (e.g. `TextField`, `BoolField`, `SubmitField`) with InstructureUI components:
     - Use `<TextInput />` for text fields
     - Use `<Checkbox />` for boolean fields
     - Use `<Button />` for submit

   Example for `TextField`:
   ```tsx
   import { TextInput } from '@instructure/ui-text-input';
   // ...
   <TextInput
     value={value ?? ''}
     onChange={(_e, val) => onChange(val)}
     // ...other props
   />
   ```

4. **Build (Optional)**
   - If you want CJS/ESM outputs, add TypeScript configs and run:
     ```sh
     npm run build:cjs --prefix src/uniforms-instructure
     npm run build:esm --prefix src/uniforms-instructure
     ```

5. **Use Your Theme**
   - Import and use your custom theme in uniforms forms:
     ```js
     import { AutoForm } from './uniforms-instructure';
     <AutoForm schema={yourSchema} />
     ```

---

**Tip:**
- Ignore your build output (`esm/`, `cjs/`) in `.eslintignore`.
- Rebuild after making changes.
- Extend for other field types as needed.

For more, see [Uniforms Docs](https://uniforms.tools/) and [InstructureUI Docs](https://instructure.design/).
