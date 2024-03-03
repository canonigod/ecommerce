"use client";
import React, { useEffect } from "react";
import Image from "next/image";

// Shopping Cart Context
import { useShoppingCart } from "../context/ShoppingCartContext";

// Fontawesome
import {
  faTrash as trash,
  faXmark as close,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import styles from "../styles/components/ShoppingCart.module.css";

// Internal Components
import { Button, QuantityInput } from "@/components";

// Custom Hooks
import { formatNumberWithCommas } from "@/hooks/customHooks";

export const ShoppingCart = () => {
  const {
    isShoppingCartOpen,
    toggleShoppingCart,
    cartItems,
    getProductQuantity,
    removeFromCart,
    getTotalPrice,
  } = useShoppingCart();

  useEffect(() => {
    const shoppingCartElement = document.querySelector(
      `.${styles.shoppingCart}`
    );
    if (isShoppingCartOpen) {
      document.body.style.overflow = "hidden";
      shoppingCartElement.removeAttribute("inert");
    } else {
      document.body.style.overflow = "auto";
      shoppingCartElement.setAttribute("inert", true);
    }
  }, [isShoppingCartOpen]);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const shippingAmount = 12.5;
  const taxPercentage = 0.23;

  const taxAmount = () => getTotalPrice() * taxPercentage;
  const totalPrice = () => getTotalPrice() + shippingAmount + taxAmount();

  // Format numbers with commas
  const formattedProductPrice = (price) => formatNumberWithCommas(price);
  const formattedSubTotal = formatNumberWithCommas(getTotalPrice());
  const formattedShippingAmount = formatNumberWithCommas(shippingAmount);
  const formattedTaxAmount = formatNumberWithCommas(taxAmount());
  const formattedTotalPrice = formatNumberWithCommas(totalPrice());

  return (
    <div
      className={`
        ${styles.shoppingCart} 
        ${isShoppingCartOpen ? styles.open : ""}
        ${cartItems.length === 0 ? styles.empty : ""}
      `}
    >
      <div className={styles.header}>
        <h2>Shopping Cart</h2>
        <FontAwesomeIcon
          icon={close}
          className={styles.closeIcon}
          onClick={toggleShoppingCart}
        />
      </div>
      {cartItems.length > 0 && (
        <React.Fragment>
          <div className={styles.body}>
            {cartItems.map((product, index) => (
              <div className={styles.product} key={index}>
                <div className={styles.productImage}>
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={80}
                    height={50}
                  />
                </div>
                <div className={styles.productDetails}>
                  <div className={styles.productTitle}>{product.title}</div>
                  <div className={styles.productQuantity}>
                    <QuantityInput
                      stock={product.stock}
                      quantity={getProductQuantity(product.id)}
                      product={product}
                    />
                    <p>${formattedProductPrice(product.price)}</p>
                    <FontAwesomeIcon
                      icon={trash}
                      onClick={() => handleRemoveFromCart(product.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className={styles.pricingWrapper}>
              <div className={`${styles.pricing} ${styles.subtotalPrice}`}>
                <p>Subtotal</p>
                <p>${formattedSubTotal}</p>
              </div>
              <div className={`${styles.pricing} ${styles.shippingPrice}`}>
                <p>Shipping</p>
                <p>${formattedShippingAmount}</p>
              </div>
              <div className={`${styles.pricing} ${styles.taxPrice}`}>
                <p>VAT (23%)</p>
                <p>${formattedTaxAmount}</p>
              </div>
            </div>
            <div className={styles.footer}>
              <p>Total</p>
              <p>${formattedTotalPrice}</p>
            </div>
            <Button noMaxWidth>Proceed to checkout</Button>
          </div>
        </React.Fragment>
      )}
      {cartItems.length === 0 && (
        <div className={styles.emptyCardWrapper}>
          <Image
            src="/images/empty-bag.svg"
            alt="empty bag"
            width={320}
            height={350}
          />
          <div className={styles.emptyCardCopy}>
            <p className={styles.emptyCardTitle}>Cart is Empty</p>
            <p className={styles.emptyCardSubtitle}>Add products to continue</p>
          </div>
        </div>
      )}
    </div>
  );
};
