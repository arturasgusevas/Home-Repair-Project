import {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './Card/Card';
import styles from './CardList.module.scss';
import {
  MdOutlineCleaningServices,
  MdBuild,
  MdBrush,
  MdLocalShipping,
  MdPlumbing,
  MdOutlineElectricBolt
} from 'react-icons/md';
import {IconType} from 'react-icons';

interface Category {
  name: string;
  iconUrl: string;
}

const iconMap: Record<string, IconType> = {
  Cleaning: MdOutlineCleaningServices,
  Repair: MdBuild,
  Painting: MdBrush,
  Shifting: MdLocalShipping,
  Plumbing: MdPlumbing,
  Electrical: MdOutlineElectricBolt
};

function CardList() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch categories:', error);
      });
  }, []);

  return (
    <div className={styles.cardList}>
      <div className={styles.cardListContainer}>
        {categories.map((category) => {
          const Icon = iconMap[category.name] || MdOutlineCleaningServices;
          return <Card key={category.name} title={category.name} icon={Icon} />;
        })}
      </div>
    </div>
  );
}

export default CardList;
