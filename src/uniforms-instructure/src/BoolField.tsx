import React from 'react';
import { HTMLFieldProps, connectField, filterDOMProps } from 'uniforms';
import { Checkbox } from '@instructure/ui-checkbox';

export type BoolFieldProps = HTMLFieldProps<
  boolean,
  HTMLDivElement,
  { inputRef?: any }
>;

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
