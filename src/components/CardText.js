import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "../styles/components/CardText.module.css";

const CardText = ({
  icon,
  title,
  subtitle,
  underline = true,
  roundCornerTop,
  roundCornerBottom,
}) => {
  return (
    <div
      className={`${styles.cardWrapper} ${
        roundCornerTop && styles.roundCornerTop
      }
      ${roundCornerBottom && styles.roundCornerBottom}
      `}
    >
      <p className={styles.icon}>{icon}</p>
      <div className={styles.cardText}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>
          {underline ? <u>{subtitle}</u> : subtitle}
        </p>
      </div>
    </div>
  );
};

CardText.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  underline: PropTypes.bool,
  roundCornerTop: PropTypes.bool,
  roundCornerBottom: PropTypes.bool,
};

export default CardText;
