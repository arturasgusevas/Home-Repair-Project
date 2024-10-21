import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {UserContext} from '../../context/UserContext';
import axios from 'axios';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  if (!userContext) {
    throw new Error('useContext must be used within a UserProvider');
  }

  const {setUser} = userContext;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('All fields are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password
      });
      const userData = response.data;

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/');
    } catch (error) {
      setError('Incorrect email or password');
      console.error('Failed to login:', error);
    }
  };

  return (
    <div className={styles.loginForm}>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className={styles.error}>{error}</p>}
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
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
