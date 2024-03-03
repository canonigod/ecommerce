"use client";

import React, { useState } from "react";
import Image from "next/image";

// Fontawesome
import {
  faArrowUpFromBracket as share,
  faPaperclip as paperclip,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp as whatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import styles from "../styles/components/ProductDetailImages.module.css";

// Intenral Components
import { Button } from "@/components";

const ProductDetailImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images && images[0]);
  const [isShareButtonOpen, setIsShareButtonOpen] = useState(false);

  // Change the active dot
  const handleDotClick = (index) => {
    setSelectedImage(images[index]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.largeImage}>
        <Image width={100} height={100} src={selectedImage} alt="Large" />
        <div className={styles.shareButtonWrapper}>
          <div className={styles.shareButtonContainer}>
            <Button
              arialLabel="share button"
              type="ghost"
              autoWidth
              noPadding
              onClick={() => setIsShareButtonOpen(!isShareButtonOpen)}
            >
              <FontAwesomeIcon icon={share} />
            </Button>
            <div
              className={`
                ${styles.shareOptionsWrapper} 
                ${!isShareButtonOpen ? styles.closed : ''}
              `}
            >
              <FontAwesomeIcon icon={whatsapp} />
              <FontAwesomeIcon icon={paperclip} />
            </div>
          </div>
        </div>
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
