import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {UserContext} from '../../context/UserContext';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  if (!userContext) {
    throw new Error('useContext must be used within a UserProvider');
  }

  const {setUser} = userContext;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setError('All fields are required');
      return;
    }

    const userData = {username};
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/');
  };

  return (
    <div className={styles.loginForm}>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
