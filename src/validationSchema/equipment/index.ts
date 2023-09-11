import * as yup from 'yup';

export const equipmentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  manufacturer: yup.string().required(),
  model_number: yup.string().required(),
  serial_number: yup.string().required(),
  hospital_id: yup.string().nullable().required(),
});
