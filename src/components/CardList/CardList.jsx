import Card from './Card/Card';
import cardData from '../../data/cardData.js';
import styles from './CardList.module.scss';

function CardList() {
  return (
    <div className={styles.cardList}>
      {cardData.map((service) => {
        const {id, icon: Icon, title} = service;
        <Card key={id} icon={<Icon />} title={title} />;
      })}
    </div>
  );
}

export default CardList;
