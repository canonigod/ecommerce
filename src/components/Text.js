import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "../styles/components/Text.module.css";

const Text = ({
  bold,
  children,
  color = "black",
  size = "regular",
  type = "span",
}) => {
  const getMarkup = () => {
    const classes = `${styles[color]} ${bold && styles.bold} ${styles[size]}`;

    switch (type) {
      case "span":
        return <span className={classes}>{children}</span>;
      case "p":
        return <p className={classes}>{children}</p>;
    }
  };

  return getMarkup();
};

Text.propTypes = {
  bold: PropTypes.bool,
  color: PropTypes.oneOf([
    "darkGray",
    "danger",
    "lightGray",
    "blue",
    "lime",
    "yellow",
    "textGray",
  ]),
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  type: PropTypes.string,
};

export default Text;
