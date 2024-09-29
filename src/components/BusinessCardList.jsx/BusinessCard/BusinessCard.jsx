import styles from './BusinessCard.module.scss';
import PropTypes from 'prop-types';

function BusinessCard({photo, category, title, name, address}) {
  return (
    <div className={styles.businessCard}>
      <img src={photo} alt={title} className={styles.photo} />
      <div className={styles.cardContent}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.name}>{name}</p>
        <p className={styles.address}>{address}</p>
        <button className={styles.bookButton}>Book Now</button>
      </div>
    </div>
  );
}

BusinessCard.propTypes = {
  photo: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
};

export default BusinessCard;
