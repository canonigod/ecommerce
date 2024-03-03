import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/components/Tag.module.css";

export const Tag = ({ backgroundColor, size, text }) => {
  return (
    <div className={`${styles.tag} ${styles[size]} ${styles[backgroundColor]}`}>{text}</div>
  );
};

Tag.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  backgroundColor: PropTypes.oneOf([
    "darkGray",
    "danger",
    "lightGray",
    "blue",
    "lime",
    "yellow",
  ]),
};

export default Tag;
