import styles from './Search.module.scss';

function Search() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Find Home Service/Repair Near You</h1>
      <div className={styles.searchBar}>
        <input className={styles.input} type='text' placeholder='Search...' />
        <button className={styles.button}></button>
      </div>
    </main>
  );
}

export default Search;
