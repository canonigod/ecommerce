"use client";
import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "../styles/components/Hero.module.css";

// Internal Components
import { Hyperlink, Text } from "@/components";

const Hero = ({
  backgroundImage,
  ctaLink,
  ctaText,
  topText,
  title,
  subTitle,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.heroWrapper}
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
        }}
      >
        <div className={styles.textSection}>
          <Text color="blue" bold>
            {topText}
          </Text>
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subTitle}</p>
          </div>
          <div>
            <Hyperlink href={ctaLink} rounded>
              {ctaText}
            </Hyperlink>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  backgroundImage: PropTypes.string,
  topText: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

export default Hero;
