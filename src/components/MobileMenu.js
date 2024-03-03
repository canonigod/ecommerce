"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Fontawesome
import {
  faBars as hamburger,
  faXmark as close,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import styles from "../styles/components/MobileMenu.module.css";

// Internal Components
import { SearchBar } from "@/components";

const MobileMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [positionSticky, setPositionSticky] = useState(true);

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document
        .querySelector(`.${styles.openMenuWrapper}`)
        .removeAttribute("inert");
    } else {
      document.body.style.overflow = "auto";
      document
        .querySelector(`.${styles.openMenuWrapper}`)
        .setAttribute("inert", true);
    }
  }, [isOpen]);

  // function to handle active index
  const handleActiveIndex = (index) => {
    setActiveIndex(index);
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setPositionSticky(!positionSticky);
  };

  return (
    <div className={`${styles.mobileMenu} ${positionSticky && styles.sticky}`}>
      <div className={styles.topSection}>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Decathlon logo"
            loading="lazy"
            width={160}
            height={40}
          />
        </Link>
        <FontAwesomeIcon icon={hamburger} onClick={toggleMenu} />
      </div>
      <SearchBar />
      <div
        className={`${styles.openMenuWrapper} ${isOpen && styles.open}`}
        role="presentation"
      >
        {/* Close Button */}
        <FontAwesomeIcon
          className={styles.closeIcon}
          icon={close}
          onClick={toggleMenu}
        />

        {/* Logo */}
        <div className={styles.logoWrapper}>
          <Image
            src="/images/logo.png"
            alt="Decathlon logo"
            loading="lazy"
            width={220}
            height={50}
          />
        </div>

        {/* Menu items */}
        <ul className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <Link
              href={item.link}
              className={activeIndex === index ? styles.activeMenu : ""}
              key={index}
            >
              <li onClick={() => handleActiveIndex(index)}>{item.text}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
