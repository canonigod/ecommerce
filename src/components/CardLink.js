"use client";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

// Styles
import styles from "../styles/components/CardLink.module.css";

// Internal Componets
import { Text } from "@/components";

const CardLink = ({ imageUrl, text, textColor, href }) => {
  useEffect(() => {
    sessionStorage.setItem("currentPage", 1); // Store current page in session storage
  }, []);
  
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <Link href={href}>
        <div className={styles.text}>
          <Text color={textColor}>{text}</Text>
        </div>
      </Link>
    </div>
  );
};

CardLink.propTypes = {
  imageUrl: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
  href: PropTypes.string,
};

export default CardLink;
