import {useNavigate} from 'react-router-dom';
import {IconType} from 'react-icons';
import styles from './Card.module.scss';

interface CardProps {
  icon: IconType;
  title: string;
  className?: string;
  layout?: 'square' | 'horizontal';
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  className = '',
  layout = 'square'
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/search/${title.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div
      className={`${styles.card} ${className} ${
        layout === 'horizontal' ? styles.horizontalCard : ''
      }`}
      onClick={handleCardClick}
    >
      <div className={styles.icon}>{Icon && <Icon size={24} />}</div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default Card;
