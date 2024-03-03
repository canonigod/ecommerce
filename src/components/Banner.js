"use clientl";
import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "../styles/components/Banner.module.css";

export const Banner = ({ backgroundColor = "darkGray", boldText, text }) => {
  return (
    <div className={`${styles[backgroundColor]} ${styles.bannerWrapper}`}>
      <span>
        <b>{boldText}</b> {text}
      </span>
    </div>
  );
};

Banner.propTypes = {
backgroundColor: PropTypes.oneOf([
  "darkGray",
  "lightGray",
  "blue",
  "lime",
  "yellow",
]),
  boldText: PropTypes.string,
  text: PropTypes.string,
};

export default Banner;
