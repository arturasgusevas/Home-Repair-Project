import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import styles from '../../styles/authForm.module.scss';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      setError('All fields are required');
      return;
    }

    try {
      await axios.post('http://localhost:5000/auth/register', {
        name,
        email,
        password
      });
      navigate('/login');
    } catch (error) {
      setError('Registration failed');
      console.error('Failed to register:', error);
    }
  };

  return (
    <div className={styles.authForm}>
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Register</button>
        <p className={styles.switch}>
          Already have an account? <a href='/login'>Login here</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
