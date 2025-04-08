import React from 'react';
import { useFormik } from 'formik';


const MultiForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      age: '',
      address: '',
    },
    onSubmit: (values) => {
      console.log('Form Data:', values);
    },
  });

  return (
    <div className="form-container">
      <h2>Formik Multi-Field Form</h2>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
        />

        <label htmlFor="address">Address:</label>
        <input
          id="address"
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MultiForm;
