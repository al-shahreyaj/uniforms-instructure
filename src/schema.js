import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
import { createValidator } from './validator';

// Define a simplified user schema with only text and boolean fields
const userSchema = {
  type: 'object',
  properties: {
    firstName: { 
      type: 'string',
      title: 'First Name',
      minLength: 2,
      description: 'Enter your first name'
    },
    lastName: { 
      type: 'string',
      title: 'Last Name',
      minLength: 2,
      description: 'Enter your last name'
    },
    email: {
      type: 'string',
      title: 'Email Address',
      format: 'email',
      description: 'Enter a valid email address'
    },
    subscribe: {
      type: 'boolean',
      title: 'Subscribe to newsletter',
      default: false,
      description: 'Would you like to receive our newsletter?'
    },
    agreeToTerms: {
      type: 'boolean',
      title: 'I agree to the terms and conditions',
      default: false
    }
  },
  required: ['firstName', 'lastName', 'email', 'agreeToTerms'],
};

// Create and export the schema bridge
export const schema = new JSONSchemaBridge({
  schema: userSchema,
  validator: createValidator(userSchema),
});
