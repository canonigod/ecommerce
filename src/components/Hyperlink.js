import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

// Styles
import styles from "../styles/components/Hyperlink.module.css";

const Hyperlink = ({
  children,
  icon,
  type = "primary",
  rounded,
  href,
  size = "regular",
}) => {
  return (
    <Link
      className={`
        ${rounded && styles.rounded} 
        ${styles[type]} ${styles[size]}
        ${styles.button} 
      `}
      href={href}
    >
      {icon}
      {children}
    </Link>
  );
};

Hyperlink.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  children: PropTypes.node,
  icon: PropTypes.node,
  rounded: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.string,
};

export default Hyperlink;
