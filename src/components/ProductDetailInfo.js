import React from "react";
import PropTypes from "prop-types";
import StarRating from "./StarRating";

// Shopping Cart Context
import { useShoppingCart } from "../context/ShoppingCartContext";

// Font Awesome
import {
  faTruck as truck,
  faBoxOpen as openBox,
  faCartPlus as cart,
  faBolt as bolt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import styles from "../styles/components/ProductDetailInfo.module.css";

// Internal Components
import { Button, CardText, QuantityInput, Text } from "@/components";

// Custom hooks
import { formatNumberWithCommas } from "../hooks/customHooks";

export const ProductDetailInfo = ({ product }) => {
  const { title, description, rating, price, stock } = product;
  const { addToCart, toggleShoppingCart, getProductQuantity } =
    useShoppingCart();

  // Stock message
  const getStockMessage = (stock) => {
    if (stock > 20) {
      return (
        <Text size="medium">
          <Text color="blue" size="medium" bold>{`${stock} items`}</Text> in
          stock
        </Text>
      );
    } else {
      return (
        <Text size="medium">
          Only <Text color="danger" size="medium" bold>{`${stock} items`}</Text>{" "}
          Left!
        </Text>
      );
    }
  };

  const handleAddProductToCart = (product) => {
    toggleShoppingCart();
    addToCart(product);
  };

  return (
    <div className={`${styles.productInfoWrapper}`}>
      {/* First Box */}
      <div className={`${styles.box} ${styles.w100}  ${styles.productInfo}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.rating}>
          {rating && <StarRating color="blue" rating={rating} />}{" "}
          <span className={styles.ratingCount}>(121)</span>
        </div>
      </div>

      {/* Second Box */}
      <div className={`${styles.box} ${styles.w100}  ${styles.priceWrapper}`}>
        <p className={styles.price}>
          ${formatNumberWithCommas(price)} or $
          {formatNumberWithCommas(price / 6)}/mo
        </p>
        <p className={styles.priceSubtitle}>
          Suggested payments with a 6-month financing plan
        </p>
      </div>

      {/* Third Box */}
      <div className={`${styles.w100} ${styles.buySectionWrapper}`}>
        {/* First Section */}
        <div className={styles.quantityWrapper}>
          {getProductQuantity(product.id) > 0 && (
            <QuantityInput stock={stock} product={product} />
          )}
          <p>{getStockMessage(stock)}</p>
        </div>

        {/* Second Section */}
        <div className={styles.buyButtonsWrapper}>
          <Button icon={<FontAwesomeIcon icon={bolt} />}>
            Buy Now
          </Button>
          <Button
            icon={<FontAwesomeIcon icon={cart} />}
            type="secondary"
            onClick={() => handleAddProductToCart(product)}
          >
            Add to Cart
          </Button>
        </div>

        {/* Third Section */}
        <div className={styles.card}>
          <CardText
            icon={<FontAwesomeIcon icon={truck} />}
            title="Free Delivery"
            subtitle="Enter your Postal code for Delivery Availability"
            roundCornerTop
          />
          <CardText
            icon={<FontAwesomeIcon icon={openBox} />}
            title="Return Delivery"
            subtitle="Free 30 days Delivery Returns"
            roundCornerBottom
          />
        </div>
      </div>
    </div>
  );
};

ProductDetailInfo.propTypes = {
  product: PropTypes.object.isRequired,
};