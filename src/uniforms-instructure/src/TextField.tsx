import React, { Ref } from 'react';
import { HTMLFieldProps, connectField, filterDOMProps } from 'uniforms';
import { TextInput } from '@instructure/ui-text-input';

export type TextFieldProps = HTMLFieldProps<
  string,
  HTMLDivElement,
  { inputRef?: ((inputElement: HTMLInputElement | null) => void) | undefined }
>;

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
  // Only allow valid types for InstructureUI TextInput
  const allowedTypes = ['text', 'email', 'url', 'tel', 'search', 'password'];
  const inputType = allowedTypes.includes(type as string) ? type : 'text';
  // Convert inputRef to function or undefined
  const inputRefFn = typeof inputRef === 'function' ? inputRef : undefined;
  return (
    <div {...filterDOMProps(props)}>
      <TextInput
        id={id}
        name={name}
        renderLabel={label}
        value={value ?? ''}
        onChange={(_e: any, val: string) => onChange(val)}
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
