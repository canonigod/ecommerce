"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "../styles/components/Navbar.module.css";

// Internal Copmonents
import { SearchBar, CartIcon } from "@/components";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    {
      text: "Browse All",
      link: "/items",
    },
    {
      text: "Lorem Ipsum",
      link: "#",
    },
    {
      text: "Lorem Ipsum",
      link: "#",
    },
    {
      text: "Lorem Ipsum",
      link: "#",
    },
  ];

  // function to handle active index
  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className={styles.Navbar}>
      <div className={styles.logoMenu}>
        <a href="/" onClick={() => setActiveIndex(null)}>
          <Image
            src="/images/logo.png"
            alt="Decathlon logo"
            loading="lazy"
            width={112}
            height={28}
          />
        </a>

        <ul className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={activeIndex === index ? styles.activeMenu : ""}
              >
                <span onClick={() => handleActiveIndex(index)}>
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.menuItems}>
        <SearchBar />
        <CartIcon />
      </div>
    </nav>
  );
};

export default Navbar;
