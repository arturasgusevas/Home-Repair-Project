import {Formik, Form, Field, ErrorMessage} from 'formik';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import {RegisterFormValues} from '../../types';
import {registerValidationSchema} from '../../validationSchemas';
import styles from '../../styles/AuthForm.module.scss';

const initialValues: RegisterFormValues = {
  name: '',
  email: '',
  password: ''
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: RegisterFormValues) => {
    try {
      await axios.post('http://localhost:5000/auth/register', values);
      navigate('/login');
    } catch (error) {
      console.error('Failed to register:', error);
    }
  };

  return (
    <div className={styles.authForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={registerValidationSchema}
        onSubmit={handleSubmit}
      >
        {({isSubmitting}) => (
          <Form>
            <h2>Register</h2>
            <div className={styles.formGroup}>
              <Field
                type='text'
                name='name'
                placeholder='Name'
                className={styles.input}
              />
              <ErrorMessage
                name='name'
                component='div'
                className={styles.error}
              />
            </div>

            <div className={styles.formGroup}>
              <Field
                type='email'
                name='email'
                placeholder='Email'
                className={styles.input}
              />
              <ErrorMessage
                name='email'
                component='div'
                className={styles.error}
              />
            </div>

            <div className={styles.formGroup}>
              <Field
                type='password'
                name='password'
                placeholder='Password'
                className={styles.input}
              />
              <ErrorMessage
                name='password'
                component='div'
                className={styles.error}
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className={styles.button}
            >
              Register
            </button>
            <div className={styles.switch}>
              <p>
                Already have an account? <Link to='/login'>Login here</Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
