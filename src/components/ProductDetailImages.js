"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Styles
import styles from "../styles/components/ProductDetailImages.module.css";

// Custom hook
import { useScreenSize } from "@/hooks/customHooks";

const ProductDetailImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images && images[0]);
  const { isMobile, isTablet } = useScreenSize();

  // Change the active dot
  const handleDotClick = (index) => {
    setSelectedImage(images[index]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.largeImage}>
        <Image width={100} height={100} src={selectedImage} alt="Large" />
      </div>
      <div className={styles.dotContainer}>
        {/* Dots to indicate selected image */}
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              selectedImage === images[index] ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailImages;
