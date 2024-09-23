import styles from './Search.module.scss';
import {FaMagnifyingGlass} from 'react-icons/fa6';

function Search() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>
        Find Home <span className={styles.blue}>Service/Repair</span>{' '}
        Near&nbsp;You
      </h1>
      <div className={styles.searchBar}>
        <input className={styles.input} type='text' placeholder='Search...' />
        <button className={styles.button}>
          <FaMagnifyingGlass />
        </button>
      </div>
    </main>
  );
}

export default Search;
