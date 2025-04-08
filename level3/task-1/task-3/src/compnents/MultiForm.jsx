import React from 'react';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';


const MultiForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      age: '',
      address: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form Data:', values);
    },
  });

  return (
    <div className="form-container">
      <h2>Formik Form with Validation</h2>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.age && formik.errors.age ? (
          <div className="error">{formik.errors.age}</div>
        ) : null}

        <label htmlFor="address">Address:</label>
        <input
          id="address"
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="error">{formik.errors.address}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MultiForm;
