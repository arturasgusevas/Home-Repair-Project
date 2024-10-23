import {Formik, Form, Field, ErrorMessage} from 'formik';
import {loginValidationSchema} from '../../validationSchemas';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import styles from '../../styles/authForm.module.scss';

const initialValues = {
  email: '',
  password: ''
};

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/auth/login',
        values
      );
      const userData = response.data;

      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/');
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  return (
    <div className={styles.authForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        {({isSubmitting}) => (
          <Form>
            <h2>Login</h2>
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

            <button type='submit' disabled={isSubmitting}>
              Login
            </button>
            <div className={styles.switch}>
              <p>
                Don't have an account? <Link to='/register'>Register here</Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
