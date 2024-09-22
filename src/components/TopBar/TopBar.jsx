import {FaForumbee, FaBars} from 'react-icons/fa';
import styles from './TopBar.module.scss';
import {useState} from 'react';

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
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
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/services'>Services</a>
            </li>
            <li>
              <a href='/about-us'>About Us</a>
            </li>
          </ul>
        </nav>
      </div>

      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>

      <button className={styles.login}>
        <p>Login/Sign-Up</p>
      </button>
    </header>
  );
}

export default TopBar;
