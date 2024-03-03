import React from "react";

// Style
import styles from "../styles/components/LoadingBars.module.css";

const LoadingBars = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.spinnerSquare}>
        <div className={`${styles.squareOne} ${styles.square}`}></div>
        <div className={`${styles.squareTwo} ${styles.square}`}></div>
        <div className={`${styles.squareThree} ${styles.square}`}></div>
      </div>
    </div>
  );
};

export default LoadingBars;
