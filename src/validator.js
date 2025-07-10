import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv({
  allErrors: true,
  useDefaults: true,
  keywords: ['uniforms'],
});

// Add format validators (email, date, etc)
addFormats(ajv);

/**
 * Creates a validator function for uniforms
 * @param {object} schema - The JSON schema to validate against
 * @returns {function} - A validator function that returns errors or null
 */
export function createValidator(schema) {
  const validator = ajv.compile(schema);

  return (model) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}
