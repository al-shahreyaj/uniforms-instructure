import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import { Checkbox } from '@instructure/ui-checkbox';
import { View } from '@instructure/ui-view';
import { Text } from '@instructure/ui-text';

/**
 * CustomBoolField component that uses InstructureUI Checkbox component
 * for use with uniforms AutoForm
 */
const CustomBoolField = ({
  id,
  label,
  disabled,
  error,
  errorMessage,
  showInlineError,
  name,
  onChange,
  readOnly,
  value,
  ...props
}) => {
  // Handle change event
  const handleChange = (event) => {
    onChange(event.target.checked);
  };
  
  return (
    <View as="div" margin="small 0">
      <Checkbox
        id={id}
        name={name}
        label={label}
        checked={!!value}
        onChange={handleChange}
        disabled={disabled}
        interaction={disabled ? 'disabled' : readOnly ? 'readonly' : 'enabled'}
        {...filterDOMProps(props)}
      />
      
      {error && showInlineError && (
        <View as="div" margin="xx-small 0 0 small">
          <Text color="danger" size="small">
            {errorMessage || 'This field is required'}
          </Text>
        </View>
      )}
    </View>
  );
};

// Connect the field to uniforms
export default connectField(CustomBoolField, { kind: 'leaf' });
