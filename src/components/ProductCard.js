import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

// Styles
import styles from "../styles/components/ProductCard.module.css";

// Internal Components
import { ProductCardImage, StarRating, Text } from "@/components";
import { Tag } from "./Tag";

// Custom hooks
import { useFormatNumberWithCommas } from '../hooks/customHooks';

export const Product = ({ product }) => {
  return (
    <Link href={`/items/${product.id}`} as={`/items/${product.id}`}>
      <div className={styles.productInfoWrapper}>
        <div className={styles.imageWrapper}>
          <ProductCardImage
            alt={product.title}
            src={product.thumbnail}
            width={350}
            height={200}
          />
          <div className={styles.tag}>
            <Tag
              backgroundColor="danger"
              text={`-${product.discountPercentage}%`}
              size="small"
            />
          </div>
        </div>
        <div className={styles.productInfo}>
          <p className={styles.productTitle}>{product.title}</p>
          <p className={styles.productDescription}>{product.description}</p>
          <div className={styles.rating}>
            <StarRating rating={product.rating} />
          </div>
          <div className={styles.productCatPrice}>
            <p className={styles.productCategory}>{product.category}</p>
            <div className={styles.priceWrapper}>
              <p className={styles.productPrice}>
                ${useFormatNumberWithCommas(product.price)}
              </p>
              {product.fullPrice && (
                <p className={styles.productFullPrice}>
                  <Text color="lime" size="medium"><s>${useFormatNumberWithCommas(product.fullPrice)}</s></Text>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
