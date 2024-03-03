"use client";
import React from "react";

// Shopping Cart Context
import { useShoppingCart } from "../context/ShoppingCartContext";

// Styles
import styles from "../styles/components/CartIcon.module.css";

// Fontawesome
import { faCartShopping as cart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const CartIcon = () => {
  const { cartItems, toggleShoppingCart } = useShoppingCart();

  return (
    <div className={styles.cartIcon}>
      <Button
        arialLabel="open cart button"
        type="ghost"
        autoWidth
        onClick={toggleShoppingCart}
      >
        <FontAwesomeIcon icon={cart} />
        {cartItems.length > 0 && <div className={styles.cartTotal}></div>}
      </Button>
    </div>
  );
};

export default CartIcon;
