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

import { Button } from "@/components";

const QuantityInput = ({ stock, product, quantity }) => {
  const { addToCart, getProductQuantity, decreaseFromProduct } =
    useShoppingCart();

  const handleAddProductToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (productId) => {
    decreaseFromProduct(productId);
  };

  return (
    <div className={styles.quantityInputWrapper}>
      <Button
        aria-label="Decrease quantity"
        onClick={() => handleRemoveFromCart(product.id)}
        disabled={quantity === 0}
        type="ghost"
        autoWidth
        noPadding
        size="small"
      >
        <FontAwesomeIcon icon={minus} />
      </Button>
      <p aria-label="Amount of product added to cart">
        {getProductQuantity(product.id)}
      </p>
      <Button
        aria-label="Increase quantity"
        onClick={() => handleAddProductToCart(product)}
        disabled={quantity === stock}
        type="ghost"
        autoWidth
        noPadding
        size="small"
      >
        <FontAwesomeIcon icon={plus} />
      </Button>
    </div>
  );
};

QuantityInput.propTypes = {
  stock: PropTypes.number.isRequired,
  product: PropTypes.object,
  quantity: PropTypes.number,
};

export default QuantityInput;
