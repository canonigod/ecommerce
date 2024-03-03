import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

// Styles
import styles from "../styles/components/ProductCard.module.css";

// Internal Components
import { ProductCardImage, StarRating, Tag, Text } from "@/components";

// Custom hooks
import { formatNumberWithCommas } from "../hooks/customHooks";

export const Product = ({ product }) => {
  const formattedPrice = formatNumberWithCommas(product.price);
  const formattedFullPrice = formatNumberWithCommas(product.fullPrice);

  return (
    <Link
      href={`/items/${product.id}`}
      as={`/items/${product.id}?product=${product.title}`}
    >
      <div className={styles.productInfoWrapper}>
        <div
          aria-label="click to open product details page"
          className={styles.imageWrapper}
        >
          <ProductCardImage
            alt={product.title}
            src={product.thumbnail}
            width={350}
            height={200}
          />
          <div
            aria-label={`Discount percentage: ${product.discountPercentage}`}
            className={styles.tag}
          >
            <Tag
              backgroundColor="danger"
              text={`-${product.discountPercentage}%`}
              size="small"
            />
          </div>
        </div>
        <div className={styles.productInfo}>
          <p
            aria-label={`Product title: ${product.title}`}
            className={styles.productTitle}
          >
            {product.title}
          </p>
          <p
            aria-label={`Product description: ${product.description}`}
            className={styles.productDescription}
          >
            {product.description}
          </p>
          <div
            aria-label={`Product rating: ${product.rating}`}
            className={styles.rating}
          >
            <StarRating rating={product.rating} />
          </div>
          <div className={styles.productCatPrice}>
            <p
              aria-label={`Product category: ${product.category}`}
              className={styles.productCategory}
            >
              {product.category}
            </p>
            <div className={styles.priceWrapper}>
              <p
                aria-label={`Product price after discount: ${formattedPrice}`}
                className={styles.productPrice}
              >
                ${formattedPrice}
              </p>
              {formattedFullPrice && (
                <p
                  aria-label={`Product price before discount: ${formattedFullPrice}`}
                  className={styles.productFullPrice}
                >
                  <Text color="lime" size="medium">
                    <s>${formattedFullPrice}</s>
                  </Text>
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
