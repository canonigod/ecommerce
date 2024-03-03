"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Restore cart items from sessionStorage on component mount
    const savedCartItems = sessionStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  useEffect(() => {
    // Save cart items to sessionStorage whenever it changes
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleShoppingCart = () => {
    setIsShoppingCartOpen(!isShoppingCartOpen); // Toggle between true and false
  };

  // Function to add product to cart
  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // If product exists, update its quantity
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // If product does not exist, add it to the cart with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to get quantity of a product in the cart
  const getProductQuantity = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    return product ? product.quantity : 0;
  };

  // Function to decrease item from cart
  const decreaseFromProduct = (productId) => {
    const existingProduct = cartItems.find((item) => item.id === productId);

    if (existingProduct.quantity > 1) {
      // If product exists, decrease its quantity
      const updatedCart = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // If product does not exist, add it to the cart with quantity 1
      const updatedCart = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedCart);
    }
  };

  // Function to fully remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  // Function to calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        cartItems,
        decreaseFromProduct,
        getProductQuantity,
        getTotalPrice,
        isShoppingCartOpen,
        toggleShoppingCart,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
