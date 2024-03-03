"use client";
import React from "react";
import PropTypes from "prop-types";

// Shopping Cart Context
import { useShoppingCart } from "../context/ShoppingCartContext";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus as plus,
  faMinus as minus,
} from "@fortawesome/free-solid-svg-icons";

// Styles
import styles from "../styles/components/QuantityInput.module.css";

const QuantityInput = ({ stock, product, quantity }) => {
  const { addToCart, getProductQuantity, decreaseFromProduct } = useShoppingCart();


  const handleAddProductToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (productId) => {
    decreaseFromProduct(productId);
  };

  return (
    <div className={styles.quantityInputWrapper}>
      <button
        className={`${styles.button}`}
        type="button"
        aria-label="Decrease quantity"
        onClick={() => handleRemoveFromCart(product.id)}
        disabled={quantity === 0}
      >
        <FontAwesomeIcon icon={minus} />
      </button>
      <input
        className={styles.input}
        type="number"
        min="1"
        max={stock}
        value={getProductQuantity(product.id)}
        readOnly
      />
      <button
        className={`${styles.button}`}
        type="button"
        aria-label="Increase quantity"
        onClick={() => handleAddProductToCart(product)}
        disabled={quantity === stock}
      >
        <FontAwesomeIcon icon={plus} />
      </button>
    </div>
  );
};

QuantityInput.propTypes = {
  stock: PropTypes.number.isRequired,
  product: PropTypes.object,
  quantity: PropTypes.number,
};

export default QuantityInput;
