import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "../styles/components/Button.module.css";

const Button = ({
  children,
  disabled,
  icon,
  noMaxWidth,
  onClick,
  size = "regular",
  type = "primary",
}) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={`
        ${styles.button} 
        ${styles[type]} 
        ${styles[size]} 
        ${noMaxWidth && styles.noMaxWidth}
      `}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  noMaxWidth: PropTypes.bool,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default Button;
