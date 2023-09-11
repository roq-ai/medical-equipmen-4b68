import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  purchase_date: yup.date().required(),
  expiry_date: yup.date().nullable(),
  equipment_id: yup.string().nullable().required(),
  supplier_id: yup.string().nullable().required(),
});
