import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import { TextInput } from '@instructure/ui-text-input';
import { FormField } from '@instructure/ui-form-field';
import { View } from '@instructure/ui-view';

/**
 * CustomTextField component that uses InstructureUI components
 * for use with uniforms AutoForm
 */
const CustomTextField = ({
  id,
  label,
  disabled,
  error,
  errorMessage,
  showInlineError,
  name,
  onChange,
  placeholder,
  readOnly,
  type = 'text',
  value,
  required,
  description,
  ...props
}) => {
  // Create messages array for FormField
  const messages = [];
  
  // Add error message if field has error and showInlineError is true
  if (error && showInlineError) {
    messages.push({
      text: errorMessage || 'This field is required',
      type: 'error'
    });
  }
  
  // Add description as hint if available
  if (description) {
    messages.push({
      text: description,
      type: 'hint'
    });
  }
  
  // Handle change event
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  
  return (
    <View as="div" margin="small 0">
      <FormField
        id={`${id}-field`}
        label={label}
        messages={messages}
        required={required}
      >
        <TextInput
          id={id}
          name={name}
          placeholder={placeholder || ''}
          value={value || ''}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readOnly}
          type={type}
          interaction={disabled ? 'disabled' : readOnly ? 'readonly' : 'enabled'}
          isRequired={required}
          {...filterDOMProps(props)}
        />
      </FormField>
    </View>
  );
};

// Connect the field to uniforms
export default connectField(CustomTextField, { kind: 'leaf' });
