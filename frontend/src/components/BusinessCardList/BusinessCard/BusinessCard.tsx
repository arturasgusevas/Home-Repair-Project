import styles from './BusinessCard.module.scss';

interface BusinessCardProps {
  photo: string;
  category: string;
  title: string;
  name: string;
  address: string;
  className?: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  photo,
  category,
  title,
  name,
  address,
  className = ''
}) => {
  return (
    <div className={`${styles.businessCard} ${className}`}>
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
};

export default BusinessCard;
