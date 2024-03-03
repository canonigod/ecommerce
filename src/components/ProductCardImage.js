import React from "react";
import PropTypes from "prop-types";

// Next Image
import Image from "next/image";

// Styles
import styles from "../styles/components/ProductCardImage.module.css";

export const ProductCardImage = ({ alt, src, width = 100, height = 100 }) => {
  return (
    <Image
      src={src}
      alt={alt}
      loading="lazy"
      className={styles.productImage}
      width={width}
      height={height}
    />
  );
};

ProductCardImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ProductCardImage;
