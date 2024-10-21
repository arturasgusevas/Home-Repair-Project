import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import BusinessCardList from '../../components/BusinessCardList/BusinessCardList';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <main className={styles.home}>
      <div className={styles.searchWrapper}>
        <Search />
      </div>
      <CardList />
      <BusinessCardList />
    </main>
  );
};

export default Home;
