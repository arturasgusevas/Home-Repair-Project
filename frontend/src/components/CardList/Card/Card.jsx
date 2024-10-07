import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

function Card({icon: Icon, title, className, layout = 'square'}) {
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
      <div className={styles.icon}>{Icon && <Icon size={18} />}</div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  layout: PropTypes.string
};

export default Card;
