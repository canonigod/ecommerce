import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "../styles/components/BannerCTA.module.css";
import Hyperlink from "./Hyperlink";

const BannerCTA = ({ image, title, subtitle, link }) => {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <Hyperlink href={link} type="tertiary" rounded>Learn More</Hyperlink>
      </div>
    </div>
  );
};

BannerCTA.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BannerCTA;
