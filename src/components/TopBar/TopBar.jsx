import {FaForumbee} from 'react-icons/fa';
import styles from './TopBar.module.scss';

function TopBar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Home</span>
          <FaForumbee size={32} className={styles.logoIcon} />
          <span className={styles.logoText}>Repair</span>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href='/'>Home</a>
              <a href='/services'>Services</a>
              <a href='about-us'>About Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <button className={styles.login}>
        <p>Login/Sign-Up</p>
      </button>
    </header>
  );
}

export default TopBar;
