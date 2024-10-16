import BusinessCard from '../../components/BusinessCardList/BusinessCard/BusinessCard';
import businessData from '../../data/businessData';
import styles from './BusinessCardList.module.scss';

const BusinessCardList: React.FC = () => {
  return (
    <div className={styles.businessCardList}>
      {businessData.map((business) => (
        <BusinessCard
          key={business.id}
          photo={business.photo}
          category={business.category}
          title={business.title}
          name={business.name}
          address={business.address}
        />
      ))}
    </div>
  );
};

export default BusinessCardList;
