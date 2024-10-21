import {useEffect, useState} from 'react';
import axios from 'axios';
import BusinessCard from './BusinessCard/BusinessCard';
import styles from './BusinessCardList.module.scss';

interface Business {
  name: string;
  description: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  photos: string[];
}

function BusinessCardList() {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/businesses')
      .then((response) => {
        setBusinesses(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch businesses:', error);
      });
  }, []);

  return (
    <div className={styles.businessCardList}>
      {businesses.map((business) => (
        <BusinessCard
          key={business.name}
          photo={business.photos[0]}
          category={business.category}
          title={business.name}
          name={business.contactPerson}
          address={business.address}
        />
      ))}
    </div>
  );
}

export default BusinessCardList;
