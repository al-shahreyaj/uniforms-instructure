import React from 'react';
import { View } from '@instructure/ui-view';
import { Heading } from '@instructure/ui-heading';
import { schema } from './schema';
import { AutoForm } from './uniforms-instructure';
import { AutoForm as AutoFormAntd } from 'uniforms-antd';
import CustomTextField from './custom-components/CustomTextField';
import CustomBoolField from './custom-components/CustomBoolField';
import { TextInput } from '@instructure/ui-text-input';
import { Checkbox } from '@instructure/ui-checkbox';
import { Button } from '@instructure/ui-buttons';

function ManualInstructureForm() {
  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    subscribe: false,
    agreeToTerms: false,
  });
  const [errors, setErrors] = React.useState({});
  const handleChange = (name, value) => {
    setForm(f => ({ ...f, [name]: value }));
  };
  const validate = () => {
    const errs = {};
    if (!form.firstName || form.firstName.length < 2) errs.firstName = 'First name is required (min 2 chars)';
    if (!form.lastName || form.lastName.length < 2) errs.lastName = 'Last name is required (min 2 chars)';
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Valid email required';
    if (!form.agreeToTerms) errs.agreeToTerms = 'You must agree to the terms';
    return errs;
  };
  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert('Manual form submitted: ' + JSON.stringify(form, null, 2));
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 32, padding: 24, background: '#f9f9f9', borderRadius: 8 }}>
      <TextInput
        id="manual-firstName"
        name="firstName"
        renderLabel="First Name"
        value={form.firstName}
        onChange={(_e, value) => handleChange('firstName', value)}
        messages={errors.firstName ? [{ text: errors.firstName, type: 'error' }] : []}
        required
        placeholder="Enter your first name"
        margin="small"
      />
      <TextInput
        id="manual-lastName"
        name="lastName"
        renderLabel="Last Name"
        value={form.lastName}
        onChange={(_e, value) => handleChange('lastName', value)}
        messages={errors.lastName ? [{ text: errors.lastName, type: 'error' }] : []}
        required
        placeholder="Enter your last name"
        margin="small"
      />
      <TextInput
        id="manual-email"
        name="email"
        renderLabel="Email Address"
        value={form.email}
        onChange={(_e, value) => handleChange('email', value)}
        messages={errors.email ? [{ text: errors.email, type: 'error' }] : []}
        required
        placeholder="Enter a valid email address"
        margin="small"
        type="email"
      />
      <Checkbox
        id="manual-subscribe"
        name="subscribe"
        label="Subscribe to newsletter"
        checked={form.subscribe}
        onChange={(_e, data) => handleChange('subscribe', data && typeof data.checked === 'boolean' ? data.checked : !form.subscribe)}
        messages={[]}
        margin="small"
      />
      <Checkbox
        id="manual-agreeToTerms"
        name="agreeToTerms"
        label="I agree to the terms and conditions"
        checked={form.agreeToTerms}
        onChange={(_e, data) => handleChange('agreeToTerms', data && typeof data.checked === 'boolean' ? data.checked : !form.agreeToTerms)}
        messages={errors.agreeToTerms ? [{ text: errors.agreeToTerms, type: 'error' }] : []}
        required
        margin="small"
      />
      <Button type="submit" color="primary" margin="medium 0 0 0">Submit</Button>
    </form>
  );
}

function App() {
  
  const handleSubmit = (data) => {
    console.log('Submitted:', data);
    alert('Form submitted: ' + JSON.stringify(data, null, 2));
  };

  return (
    <View as="div" padding="large" maxWidth="600px" margin="0 auto">
      <Heading level="h1" margin="0 0 medium 0">Simple Registration Form</Heading>
      <View as="div" padding="medium" shadow="resting" background="primary" borderRadius="medium">
        <AutoForm
          schema={schema}
          onSubmit={handleSubmit}
        />
      </View>
      
      {/* <Heading level="h1" margin="large 0 medium 0">Custom Components</Heading>
      <View as="div" padding="medium" shadow="resting" background="primary" borderRadius="medium">
        <AutoFormAntd
          schema={schema}
          onSubmit={handleSubmit}
          components={{String: CustomTextField, Boolean: CustomBoolField}}
        />
      </View> */}

      <Heading level="h1" margin="large 0 medium 0">Manual InstructureUI Form</Heading>
      <ManualInstructureForm />
    </View>
  );
}

export default App;
