import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "../styles/components/Button.module.css";

const Button = ({
  arialLabel,
  autoWidth,
  children,
  disabled,
  dFlex,
  flexColumn,
  icon,
  noMaxWidth,
  onClick,
  size = "regular",
  type = "primary",
}) => {
  const buttonClasses = [
    styles.button,
    styles[type],
    styles[size],
    autoWidth && styles.autoWidth,
    noMaxWidth && styles.noMaxWidth,
    dFlex && styles.dFlex,
    flexColumn && styles.flexColumn,
  ].join(" ");

  return (
    <button
      aria-label={arialLabel}
      disabled={disabled}
      type="button"
      className={buttonClasses}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

Button.propTypes = {
  autoWidth: PropTypes.bool,
  arialLabel: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary", "ghost", "tertiary"]),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  dFlex: PropTypes.bool,
  flexColumn: PropTypes.bool,
  noMaxWidth: PropTypes.bool,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default Button;
