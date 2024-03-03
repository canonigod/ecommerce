"use client";
import React from "react";

// Shopping Cart Context
import { useShoppingCart } from "../context/ShoppingCartContext";

// Styles
import styles from "../styles/components/CartIcon.module.css";

// Fontawesome
import { faCartShopping as cart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartIcon = () => {
  const { cartItems, toggleShoppingCart } = useShoppingCart();

  return (
    <button
      type="button"
      className={styles.cartIcon}
      onClick={toggleShoppingCart}
    >
      <FontAwesomeIcon icon={cart} />
      {cartItems.length > 0 && <div className={styles.cartTotal}></div>}
    </button>
  );
};

export default CartIcon;
