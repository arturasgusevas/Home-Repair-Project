import {useCategories} from '../../hooks/useCategories';
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

const iconMap: Record<string, IconType> = {
  Cleaning: MdOutlineCleaningServices,
  Repair: MdBuild,
  Painting: MdBrush,
  Shifting: MdLocalShipping,
  Plumbing: MdPlumbing,
  Electrical: MdOutlineElectricBolt
};

function CardList() {
  const {data: categories, error, isLoading} = useCategories();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <div className={styles.cardList}>
      <div className={styles.cardListContainer}>
        {categories?.map((category) => {
          const Icon = iconMap[category.name] || MdOutlineCleaningServices;
          return <Card key={category.name} title={category.name} icon={Icon} />;
        })}
      </div>
    </div>
  );
}

export default CardList;
