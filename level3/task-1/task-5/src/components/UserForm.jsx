import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userValidationSchema } from '../validation/userValidation';
import { submitUserData } from '../services/userService';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const UserForm = () => {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await submitUserData(values);
      alert('Form Submitted Successfully!');
      resetForm();
    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission Failed!');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={userValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-field">
              <label>Name:</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-field">
              <label>Email:</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-field">
              <label>Password:</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="form-field">
              <label>Confirm Password:</label>
              <Field name="confirmPassword" type="password" />
              <ErrorMessage name="confirmPassword" component="div" className="error" />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
