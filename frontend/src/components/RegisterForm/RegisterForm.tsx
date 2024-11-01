import {Formik, Form, Field, ErrorMessage} from 'formik';
import {registerValidationSchema} from '../../validationSchemas';
import {useRegisterUser} from '../../hooks/useRegisterUser';
import {useNavigate, Link} from 'react-router-dom';
import {User} from '../../types/users';
import styles from '../../styles/authForm.module.scss';

const initialValues: User = {
  id: '',
  name: '',
  email: '',
  password: ''
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const {mutate} = useRegisterUser();

  const handleSubmit = (values: User) => {
    mutate(values, {
      onSuccess: () => {
        navigate('/login');
      },
      onError: (error) => {
        console.error('Failed to register:', error);
      }
    });
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

            <button type='submit' disabled={isSubmitting}>
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
