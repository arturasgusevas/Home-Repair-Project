import {useParams} from 'react-router-dom';
import businessData from '../../data/businessData';
import services from '../../data/cardData';
import BusinessCard from '../../components/BusinessCardList/BusinessCard/BusinessCard';
import Card from '../../components/CardList/Card/Card';
import styles from './SearchCategory.module.scss';

type CategoryParams = {
  category: string;
};

const SearchCategory: React.FC = () => {
  const {category} = useParams<CategoryParams>();

  if (!category) {
    return <div>Error: No category provided</div>;
  }

  const formattedCategory = category.replace(/-/g, '').toLowerCase();

  const filteredBusinesses = businessData.filter(
    (business) => business.category.toLowerCase() === formattedCategory
  );

  const categoryTitle =
    formattedCategory.charAt(0).toUpperCase() + formattedCategory.slice(1);

  return (
    <div className={styles.container}>
      <div className={styles.servicesMenu}>
        {services.map((service) => (
          <Card
            key={service.title}
            icon={service.icon}
            title={service.title}
            className={styles.menuCard}
            layout='horizontal'
          />
        ))}
      </div>
      <div className={styles.rightContent}>
        <h2 className={styles.categoryTitle}>{categoryTitle} Services</h2>
        <div className={styles.businessCards}>
          {filteredBusinesses.map((business) => (
            <BusinessCard
              key={business.id}
              {...business}
              className={styles.customBusinessCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchCategory;
