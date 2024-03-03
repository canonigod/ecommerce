import React from "react";

// Styles
import styles from "../styles/components/HomePage.module.css";

// Internal Components
import { BannerCTA, CardLink, Hero } from "@/components";

const HomePage = () => {
  const categories = [
    {
      text: "Laptops",
      href: "/items?search=laptops",
      imgUrl: "/images/laptop.png",
      color: "lime",
    },
    {
      text: "Phones",
      href: "/items?search=smartphones",
      imgUrl: "/images/iphone.png",
      color: "blue",
    },
    {
      text: "Fragrances",
      href: "/items?search=Fragrances",
      imgUrl: "/images/fragrance.png",
      color: "blue",
    },
    {
      text: "Home Decor",
      href: "/items?search=home",
      imgUrl: "/images/decor.png",
      color: "lime",
    },
  ];
  return (
    <React.Fragment>
      <Hero
        backgroundImage="/images/hero.jpg"
        topText="Up to 70% off!"
        title="Black Friday Early Access!"
        subTitle="Powering up huge deals and fast shipping"
        ctaText="Shop now"
        ctaLink="/items"
      />
      <BannerCTA
        image="/images/banner-cta.jpg"
        title="Lorem Ipsum is a dummy text"
        subtitle="Lorem ipsum dummy text continues"
        link="items/?search=laptops"
      />
      <div className={styles.categories}>
        <h2>Categories:</h2>
        <div className={styles.categoriesCardsWrapper}>
          {categories.map((cat, index) => (
            <CardLink
              key={index}
              imageUrl={cat.imgUrl}
              text={cat.text}
              href={cat.href}
              textColor={cat.color}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
