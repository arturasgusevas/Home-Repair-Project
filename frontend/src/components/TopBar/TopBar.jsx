import {useContext} from 'react';
import {UserContext} from '../../context/UserContext';
import {useNavigate, Link} from 'react-router-dom';
import {FaForumbee, FaBars} from 'react-icons/fa';
import styles from './TopBar.module.scss';
import {useState} from 'react';

function TopBar() {
  const {user, setUser} = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <header className={styles.topbar}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Home</span>
          <FaForumbee size={32} className={styles.logoIcon} />
          <span className={styles.logoText}>Repair</span>
        </div>
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/about-us'>About Us</Link>
            </li>
          </ul>
        </nav>
      </div>

      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>

      {user ? (
        <div className={styles.userInfo}>
          <p>{`Hello, ${user.username}`}</p>
          <button onClick={handleLogout} className={styles.logout}>
            Logout
          </button>
        </div>
      ) : (
        <button className={styles.login} onClick={handleLogin}>
          <p>Login/Sign-Up</p>
        </button>
      )}
    </header>
  );
}

export default TopBar;
