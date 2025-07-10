import React from 'react';
import { HTMLFieldProps, connectField, filterDOMProps } from 'uniforms';
import { Button } from '@instructure/ui-buttons';

export type SubmitFieldProps = HTMLFieldProps<
  unknown,
  HTMLDivElement,
  { inputRef?: React.Ref<HTMLInputElement> }
>;

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
