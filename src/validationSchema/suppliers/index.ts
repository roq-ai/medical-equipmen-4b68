import * as yup from 'yup';

export const supplierValidationSchema = yup.object().shape({
  name: yup.string().required(),
  contact_person: yup.string().required(),
  contact_number: yup.string().required(),
  email_address: yup.string().required(),
  address: yup.string().required(),
});
