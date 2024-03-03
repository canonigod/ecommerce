import React from "react";
import Link from "next/link";

// Shopping Cart Context
import { useShoppingCart } from "../context/ShoppingCartContext";

// Fontawesome
import {
  faHouseChimney as home,
  faHeart as heart,
  faCartShopping as cart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import styles from "../styles/components/BottomMobileMenu.module.css";

// Internal Components
import { Button, Text } from "@/components";

const BottomMobileMenu = () => {
  const { toggleShoppingCart } = useShoppingCart();

  const menuItems = [
    {
      text: "Wish List",
      link: "#",
      icon: heart,
    },
    {
      text: "Home",
      link: "/",
      icon: home,
    },
    {
      text: "Cart",
      link: "#",
      icon: cart,
    },
  ];

  const handleToggleCart = () => {
    toggleShoppingCart(); // Call toggleShoppingCart function
  };

  const getMarkup = (isCart, menu) => {
    if (isCart) {
      return (
        <Button
          arialLabel="Open shopping cart"
          type="ghost"
          dFlex
          flexColumn
          autoWidth
          onClick={handleToggleCart}
        >
          <FontAwesomeIcon icon={menu.icon} />
          <Text color="textGray" size="small" bold>
            {menu.text}
          </Text>
        </Button>
      );
    } else {
      return (
        <Link href={menu.link} className={styles.menuItem}>
          <FontAwesomeIcon icon={menu.icon} />
          <Text color="textGray" size="small" bold>
            {menu.text}
          </Text>
        </Link>
      );
    }
  };

  return (
    <div className={styles.bottomMobileWrapper}>
      {menuItems.map((menu, index) => {
        if (menu.text === "Cart") {
          return (
            <React.Fragment key={index}>{getMarkup(true, menu)}</React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={index}>
              {getMarkup(false, menu)}
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};

export default BottomMobileMenu;
