import React from "react";
import Image from "next/image";
import Link from "next/link";

// Fontawesome
import {
  faCcAmex as amex,
  faCcVisa as visa,
  faCcMastercard as mastercard,
  faCcPaypal as paypal,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import styles from "../styles/components/Footer.module.css";

// Internal Components
import Text from "./Text";

const Footer = () => {
  const menuOne = [
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
    {
      text: "Lorem Ipsum",
      link: "#",
    },
    {
      text: "Lorem Ipsum",
      link: "#",
    },
  ];
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <Image
              alt="footer logo"
              src="/images/logo.png"
              loading="lazy"
              width={200}
              height={50}
            />
          </div>
          <div className={styles.description}>
            {/* Company description */}
            <Text bold color="lime" type="p">
              Superior quality. Unbeatable prices.
            </Text>
            <Text size="medium" type="p">
              For 40 years, Decathlon has delivered the best value in the retail
              sports industry by offering high-quality, sustainable and
              cost-effective products.
            </Text>
            {/* Credit cards accepted */}
          </div>
          <div className={styles.creditCards}>
            <FontAwesomeIcon icon={visa} />
            <FontAwesomeIcon icon={mastercard} />
            <FontAwesomeIcon icon={paypal} />
            <FontAwesomeIcon icon={amex} />
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.menu}>
            {/* First menu */}
            <Text color="lime" bold>
              About Us
            </Text>
            <ul>
              {menuOne.map((menu, index) => (
                <Link href={menu.link} key={index}>
                  <li>{menu.text}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className={styles.menu}>
            {/* Second menu */}
            <Text color="lime" bold>
              Assistance
            </Text>
            <ul>
              {menuOne.map((menu, index) => (
                <Link href={menu.link} key={index}>
                  <li>{menu.text}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        {/* Copyright */}
        <p>
          &copy; {new Date().getFullYear()} Made by David Canonigo. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
