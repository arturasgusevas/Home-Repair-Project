import BusinessCard from '../../components/BusinessCardList/BusinessCard/BusinessCard';
import styles from './BusinessCardList.module.scss';

const businesses = [
  {
    id: 1,
    category: 'Cleaning',
    title: 'Expert Cleaning Service',
    name: 'CleanCo',
    address: '123 Main St, Cityville',
    photo: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: 2,
    category: 'Repair',
    title: 'Plumbing Repair Service',
    name: 'FixItPlumbers',
    address: '456 Elm St, Townville',
    photo: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: 3,
    category: 'Painting',
    title: 'Professional Painting',
    name: 'PaintPros',
    address: '789 Oak St, Villagetown',
    photo: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: 4,
    category: 'Shifting',
    title: 'Efficient Moving Service',
    name: 'MoveItCo',
    address: '987 Pine St, Hamlet',
    photo: 'https://picsum.photos/400/300?random=4'
  },
  {
    id: 5,
    category: 'Plumbing',
    title: 'Expert Plumbing Service',
    name: 'PipeFix',
    address: '321 Birch St, Metropolis',
    photo: 'https://picsum.photos/400/300?random=5'
  },
  {
    id: 6,
    category: 'Electrical',
    title: 'Electrical Wiring Experts',
    name: 'WireMasters',
    address: '654 Maple St, Springfield',
    photo: 'https://picsum.photos/400/300?random=6'
  },
  {
    id: 7,
    category: 'Cleaning',
    title: 'Sparkling Clean Services',
    name: 'ShineCo',
    address: '789 Cedar St, Downtown',
    photo: 'https://picsum.photos/400/300?random=7'
  },
  {
    id: 8,
    category: 'Repair',
    title: 'All-in-One Repair Services',
    name: 'FixAll',
    address: '159 Oak St, Uptown',
    photo: 'https://picsum.photos/400/300?random=8'
  }
];

function BusinessCardList() {
  return (
    <div className={styles.businessCardList}>
      {businesses.map((business) => (
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
}

export default BusinessCardList;
