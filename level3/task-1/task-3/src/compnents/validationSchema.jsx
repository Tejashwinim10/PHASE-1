import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Minimum 3 characters required')
    .required('Name is required'),

  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),

  age: Yup.number()
    .min(1, 'Age must be greater than 0')
    .required('Age is required'),

  address: Yup.string()
    .min(5, 'Minimum 5 characters required')
    .required('Address is required'),
});

export default validationSchema;
