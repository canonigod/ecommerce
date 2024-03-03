import React from 'react';
import PropTypes from 'prop-types';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons';

// Styles
import styles from '../styles/components/StarRating.module.css';

const StarRating = ({ rating, color }) => {
  // Calculate full stars (integer part of rating)
  const fullStars = Math.floor(rating);
  
  // Calculate half stars (decimal part of rating)
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;

  // Render full stars
  const renderFullStars = () => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={solidStar} />);
    }
    return stars;
  };

  // Render half star if applicable
  const renderHalfStar = () => {
    if (halfStars === 1) {
      return <FontAwesomeIcon icon={halfStar} />;
    }
    return null;
  };

  return (
    <div className={`${styles.stars} ${styles[color]}`}>
      {renderFullStars()}
      {renderHalfStar()}
    </div>
  );
};

StarRating.propTypes = {
  color: PropTypes.oneOf([
    "darkGray",
    "lightGray",
    "blue",
    "lime",
    "yellow",
  ]),
  rating: PropTypes.number.isRequired,
};

export default StarRating;
