import Card from './Card/Card';
import cardData from '../../data/cardData.js';
import styles from './CardList.module.scss';

function CardList() {
  return (
    <div className={styles.cardList}>
      {cardData.map(({id, icon: Icon, title}) => (
        <Card key={id} icon={<Icon />} title={title} />
      ))}
    </div>
  );
}

export default CardList;
