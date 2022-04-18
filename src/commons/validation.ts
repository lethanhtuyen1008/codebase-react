import * as yup from 'yup';
import { Constant } from './constant';

export const passwordSchema = yup
  .string()
  .label('Password')
  .matches(/.*[A-Z]/, ({ label }) => `${label} must contain at least an upper case character`)
  .matches(/.*[a-z]/, ({ label }) => `${label} must contain at least a lower case character`)
  .matches(/.*\d/, ({ label }) => `${label} must contain at least a number`)
  .matches(/.*[-_!@#$%^&*.,?]/, ({ label }) => `${label} must contain at least a special character`)
  .min(8, ({ label }) => `${label} must contain at least 8 characters`)
  .max(20, ({ label }) => `${label} length must not exceed 20 characters`)
  .required(({ label }) => `${label} is required`);

export const confirmPasswordSchema = yup
  .string()
  .oneOf([yup.ref('password')], 'Passwords do not match')
  .required('Confirm password is required');

export const fieldNameSchema = yup
  .string()
  .min(1, ({ label }) => `${label} must contain at least 1 characters`)
  .max(
    Constant.MAX_LENGTH_FIELD_NAME,
    ({ label }) => `${label} length must not exceed 1000 characters`,
  )
  .required(({ label }) => `${label} is required`);

export const fieldChoiceSchema = yup.array().of(
  yup.object().shape({
    name: yup
      .string()
      .max(Constant.MAX_LENGTH_NAME, `The value must be less than ${Constant.MAX_LENGTH_NAME}`)
      .required('Name is required'),
    value: yup.string().required('Value is required'),
  }),
);

export const fieldDepthLevelSchema = yup.array().of(
  yup.object().shape({
    nameLevel: yup
      .string()
      .max(Constant.MAX_LENGTH_NAME, `The value must be less than ${Constant.MAX_LENGTH_NAME}`)
      .required('Name is required'),
  }),
);

export const fieldAliasSchema = yup.string().max(500, 'The value must be less than 500');
export const fieldPrefixSchema = yup.string().max(100, 'The value must be less than 100');
