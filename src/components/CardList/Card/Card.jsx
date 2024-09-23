import {useNavigate} from 'react-router-dom';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';

function Card({icon, title}) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/search/${title.toLowerCase().replace(/\s+/g, '-')}`);
  };
  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.icon}>{icon}</div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Card;
