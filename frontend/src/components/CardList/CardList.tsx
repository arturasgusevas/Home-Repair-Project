import Card from './Card/Card';
import cardData from '../../data/cardData';
import styles from './CardList.module.scss';

const CardList: React.FC = () => {
  return (
    <div className={styles.cardList}>
      <div className={styles.cardListContainer}>
        {cardData.map(({id, icon: Icon, title}) => (
          <Card key={id} icon={Icon} title={title} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
