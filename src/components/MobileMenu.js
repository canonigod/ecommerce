"use client";
import { useState, useEffect, useRef } from "react";
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
import { Button, SearchBar } from "@/components";

const MobileMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [positionSticky, setPositionSticky] = useState(true);

  // Dialog ref that is used to manage focus
  const dialogRef = useRef(null);

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
      dialogRef.current.inert = false;

      // Focus on the dialog when it opens
      dialogRef.current.focus();
    } else {
      document.body.style.overflow = "auto";
      dialogRef.current.inert = true;

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
        <Button
          arialLabel="open website menu"
          type="ghost"
          onClick={toggleMenu}
          autoWidth
        >
          <FontAwesomeIcon icon={hamburger} />
        </Button>
      </div>
      <SearchBar />
      <dialog
        className={`${styles.openMenuWrapper} ${isOpen && styles.open}`}
        ref={dialogRef}
      >
        {/* Close Button */}
        <Button
          arialLabel="close website menu"
          type="ghost"
          onClick={toggleMenu}
          autoWidth
        >
          <FontAwesomeIcon className={styles.closeIcon} icon={close} />
        </Button>

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
              <li
                aria-label={item.text}
                onClick={() => handleActiveIndex(index)}
              >
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </dialog>
    </div>
  );
};

export default MobileMenu;
