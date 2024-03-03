"use client";
import React from "react";

// Shopping Cart Context
import { useShoppingCart } from "../context/ShoppingCartContext";

// Fontawesome
import { faCartShopping as cart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import styles from "../styles/components/CartIcon.module.css";

// Internal Components
import { Button } from "@/components";

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
