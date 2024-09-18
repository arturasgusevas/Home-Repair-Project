import Card from './Card/Card';
import cardData from '../../data/cardData.js';
import styles from './CardList.module.scss';

function CardList() {
  return (
    <div className={styles.cardList}>
      {cardData.map((service) => (
        <Card key={service.id} icon={service.icon} title={service.title} />
      ))}
    </div>
  );
}

export default CardList;
